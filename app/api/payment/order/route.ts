import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { logger } from '@/lib/logger';

export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        let body: Record<string, unknown> | null = null;
        try {
            body = await req.json();
        } catch {
            return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
        }

        const { amount, currency = 'INR', receipt } = body ?? {};
        const numericAmount = Number(amount);
        if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
            return NextResponse.json({ error: 'Amount must be a positive number' }, { status: 400 });
        }

        const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        if (!keyId || !keySecret) {
            logger.error('Razorpay credentials missing. Cannot create order.');
            return NextResponse.json({ error: 'payment_unavailable' }, { status: 503 });
        }

        const razorpay = new Razorpay({
            key_id: keyId,
            key_secret: keySecret,
        });

        const options = {
            amount: Math.round(numericAmount * 100), // Razorpay expects paise
            currency: typeof currency === 'string' ? currency : 'INR',
            receipt: typeof receipt === 'string' && receipt.trim() ? receipt : `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json(order);
    } catch (error) {
        logger.error('Error creating Razorpay order:', error);
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}
