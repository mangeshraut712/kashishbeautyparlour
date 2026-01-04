import twilio from 'twilio';
import { logger } from './logger';

const accountSid = process.env.TWILIO_ACCOUNT_SID || 'AC_placeholder';
const authToken = process.env.TWILIO_AUTH_TOKEN || 'placeholder';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const twilioPhone = process.env.TWILIO_PHONE_NUMBER || '+1234567890'; // Reserved for SMS notifications
const whatsappPhone = process.env.TWILIO_WHATSAPP_NUMBER || '+14155238886'; // Twilio sandbox number

const client = twilio(accountSid, authToken);

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
        // Send SMS
        // await client.messages.create({
        //   body: message,
        //   from: twilioPhone,
        //   to: to,
        // });

        // Send WhatsApp (if available)
        await client.messages.create({
            body: message,
            from: `whatsapp:${whatsappPhone}`,
            to: `whatsapp:${to.startsWith('+') ? to : '+91' + to}`,
        });

        logger.info('Booking notification sent successfully');
    } catch (error) {
        logger.error('Failed to send booking notification:', error);
    }
}
