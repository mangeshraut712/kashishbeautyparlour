'use client';

import { useCallback } from 'react';
import { logger } from '@/lib/logger';

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface PaymentOptions {
    amount: number;
    name: string;
    description: string;
    email?: string;
    phone?: string;
    onSuccess?: (response: any) => void;
    onError?: (error: any) => void;
}

export const useRazorpay = () => {
    const initiatePayment = useCallback(async (options: PaymentOptions) => {
        try {
            // 1. Create order on the server
            const res = await fetch('/api/payment/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: options.amount,
                }),
            });

            const order = await res.json();

            if (!order.id) {
                throw new Error('Failed to create order');
            }

            // 2. Open Razorpay Checkout
            const razorpayOptions = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
                amount: order.amount,
                currency: order.currency,
                name: options.name,
                description: options.description,
                order_id: order.id,
                handler: async (response: any) => {
                    // 3. Verify payment on the server
                    const verifyRes = await fetch('/api/payment/verify', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        }),
                    });

                    const verifyData = await verifyRes.json();

                    if (verifyData.status === 'ok') {
                        options.onSuccess?.(response);
                    } else {
                        options.onError?.(new Error('Payment verification failed'));
                    }
                },
                prefill: {
                    name: options.name,
                    email: options.email,
                    contact: options.phone,
                },
                theme: {
                    color: '#D4AF37', // Brand color
                },
            };

            const rzp = new window.Razorpay(razorpayOptions);
            rzp.open();
        } catch (error) {
            logger.error('Razorpay payment error:', error);
            options.onError?.(error);
        }
    }, []);

    return { initiatePayment };
};
