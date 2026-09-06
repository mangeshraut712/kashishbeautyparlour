import { NextResponse } from 'next/server';
import crypto from 'crypto';
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

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body ?? {};
        if (
            typeof razorpay_order_id !== 'string' ||
            typeof razorpay_payment_id !== 'string' ||
            typeof razorpay_signature !== 'string'
        ) {
            return NextResponse.json({ error: 'invalid_payload' }, { status: 400 });
        }

        const keySecret = process.env.RAZORPAY_KEY_SECRET;
        if (!keySecret) {
            logger.error('Razorpay secret missing. Cannot verify payment.');
            return NextResponse.json({ error: 'payment_unavailable' }, { status: 503 });
        }

        const hmac = crypto.createHmac('sha256', keySecret);
        hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');

        const signatureBuffer = Buffer.from(razorpay_signature, 'utf8');
        const generatedBuffer = Buffer.from(generated_signature, 'utf8');
        const isValid =
            signatureBuffer.length === generatedBuffer.length &&
            crypto.timingSafeEqual(signatureBuffer, generatedBuffer);

        if (isValid) {
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
