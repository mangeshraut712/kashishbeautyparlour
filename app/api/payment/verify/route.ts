import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { logger } from '@/lib/logger';

export async function POST(req: Request) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

        const key_secret = process.env.RAZORPAY_KEY_SECRET || 'placeholder_secret';

        const hmac = crypto.createHmac('sha256', key_secret);
        hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');

        if (generated_signature === razorpay_signature) {
            // Payment is verified
            // TODO: Update booking status in database (Firebase)
            return NextResponse.json({ status: 'ok' });
        } else {
            return NextResponse.json({ status: 'failed' }, { status: 400 });
        }
    } catch (error) {
        logger.error('Error verifying Razorpay payment:', error);
        return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
    }
}
