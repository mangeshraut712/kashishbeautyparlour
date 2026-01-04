import twilio from 'twilio';
import { logger } from './logger';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneRaw = process.env.TWILIO_PHONE_NUMBER;
const whatsappPhoneRaw = process.env.TWILIO_WHATSAPP_NUMBER;

const normalizePhone = (value?: string | null) => {
    if (!value) return null;
    const withoutPrefix = value.replace(/^whatsapp:/i, '').trim();
    const cleaned = withoutPrefix.replace(/[^\d+]/g, '');
    return cleaned || null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const twilioPhone = normalizePhone(twilioPhoneRaw); // Reserved for SMS notifications
const whatsappPhone = normalizePhone(whatsappPhoneRaw);

let client: ReturnType<typeof twilio> | null = null;

const getClient = () => {
    if (!accountSid || !authToken) {
        return null;
    }

    if (!client) {
        client = twilio(accountSid, authToken);
    }

    return client;
};

const formatDestination = (value: string) => {
    const normalized = normalizePhone(value);
    if (!normalized) return null;
    return normalized.startsWith('+') ? normalized : `+91${normalized}`;
};

export async function sendBookingNotification({
    to,
    name,
    service,
    date,
}: {
    to: string;
    name: string;
    service: string;
    date: string;
}) {
    const message = `Hello ${name}, your booking for ${service} on ${date} at Kashish Beauty Parlour And Training Center is received. We will confirm it shortly. Thank you!`;

    try {
        if (!accountSid || !authToken || !whatsappPhone) {
            logger.debug('Twilio not configured. Skipping booking notification.');
            return;
        }

        const twilioClient = getClient();
        if (!twilioClient) {
            logger.debug('Twilio client unavailable. Skipping booking notification.');
            return;
        }

        const destination = formatDestination(to);
        if (!destination) {
            logger.warn('Invalid destination phone number for booking notification.');
            return;
        }

        // Send SMS
        // await twilioClient.messages.create({
        //   body: message,
        //   from: twilioPhone,
        //   to: to,
        // });

        // Send WhatsApp (if available)
        await twilioClient.messages.create({
            body: message,
            from: `whatsapp:${whatsappPhone}`,
            to: `whatsapp:${destination}`,
        });

        logger.info('Booking notification sent successfully');
    } catch (error) {
        logger.error('Failed to send booking notification:', error);
    }
}
