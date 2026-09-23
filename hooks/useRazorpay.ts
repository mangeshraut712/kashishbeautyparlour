'use client';

import { useCallback } from 'react';
import { logger } from '@/lib/logger';

interface RazorpaySuccessResponse {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
}

interface RazorpayCheckoutOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: RazorpaySuccessResponse) => void | Promise<void>;
    prefill: { name: string; email?: string; contact?: string };
    theme: { color: string };
}

interface RazorpayInstance {
    open: () => void;
}

interface RazorpayConstructor {
    new (options: RazorpayCheckoutOptions): RazorpayInstance;
}

declare global {
    interface Window {
        Razorpay?: RazorpayConstructor;
    }
}

interface PaymentOptions {
    amount: number;
    name: string;
    description: string;
    email?: string;
    phone?: string;
    onSuccess?: (response: RazorpaySuccessResponse) => void;
    onError?: (error: unknown) => void;
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

            if (!res.ok || !order?.id) {
                throw new Error(order?.error || 'Failed to create order');
            }

            // 2. Open Razorpay Checkout
            const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
            if (!keyId) {
                throw new Error('Razorpay key is missing');
            }

            if (!window.Razorpay) {
                throw new Error('Razorpay SDK is not loaded');
            }

            const razorpayOptions = {
                key: keyId,
                amount: order.amount,
                currency: order.currency,
                name: options.name,
                description: options.description,
                order_id: order.id,
                handler: async (response: RazorpaySuccessResponse) => {
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
