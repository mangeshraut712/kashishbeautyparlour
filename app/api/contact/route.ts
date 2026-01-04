import { NextResponse } from 'next/server'
import { db, firebaseAdmin } from '@/lib/firebaseAdmin'
import { logger } from '@/lib/logger'
import { sendBookingNotification } from '@/lib/notifications'
import { contactFormSchema, validateForm } from '@/lib/validations'

export async function POST(req: Request) {
  try {
    let body: Record<string, unknown> | null = null
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
    }

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'invalid_payload' }, { status: 400 })
    }

    const rawData = {
      firstName: body.firstName,
      lastName: body.lastName ?? '',
      phone: body.phone,
      email: body.email ?? '',
      service: body.service,
      preferredDate: body.preferredDate ?? body.date ?? '',
      message: body.message,
    }

    const validation = validateForm(contactFormSchema, rawData)
    if (!validation.success) {
      return NextResponse.json({ error: 'validation_error', fields: validation.errors }, { status: 400 })
    }

    const { firstName, lastName, phone, email, service, preferredDate, message } = validation.data
    const source = typeof body.source === 'string' && body.source.trim() ? body.source : 'website'
    const status = typeof body.status === 'string' && body.status.trim() ? body.status : 'new'

    // Check if Firebase is properly configured
    if (!firebaseAdmin.apps.length || !db) {
      if (process.env.NODE_ENV === 'production') {
        logger.error('Firebase not configured in production. Contact submission rejected.')
        return NextResponse.json({ error: 'service_unavailable' }, { status: 503 })
      }

      // Firebase not configured - provide mock success for local development
      logger.debug('Firebase not configured - simulating success for local development')

      // Simulate some processing time
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Send notification (even in mock for testing)
      try {
        await sendBookingNotification({
          to: String(phone),
          name: String(firstName),
          service: String(service),
          date: preferredDate ? String(preferredDate) : 'Soon',
        });
      } catch (notifErr) {
        logger.error('Failed to send notification independently:', notifErr);
      }

      return NextResponse.json({
        ok: true,
        mock: true,
        message: 'Local development: Form would be saved to Firebase when deployed',
        data: {
          firstName: String(firstName),
          lastName: lastName ? String(lastName) : '',
          phone: String(phone),
          email: email ? String(email) : '',
          service: String(service),
          preferredDate: preferredDate ? String(preferredDate) : null,
          message: String(message),
          source: String(source) || 'website',
          status: String(status) || 'new',
        }
      }, { status: 201 })
    }

    // Firebase is configured - save to database
    const docRef = await db.collection('contacts').add({
      firstName: String(firstName),
      lastName: lastName ? String(lastName) : '',
      phone: String(phone),
      email: email ? String(email) : '',
      service: String(service),
      preferredDate: preferredDate ? String(preferredDate) : null,
      message: String(message),
      source: String(source) || 'website',
      status: String(status) || 'new',
      submittedAt: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
    })

    // Send notification
    try {
      await sendBookingNotification({
        to: String(phone),
        name: String(firstName),
        service: String(service),
        date: preferredDate ? String(preferredDate) : 'Soon',
      });
    } catch (notifErr) {
      logger.error('Failed to send notification independently:', notifErr);
    }

    return NextResponse.json({ ok: true, id: docRef.id }, { status: 201 })

  } catch (err: unknown) {
    const error = err as Error;
    const isDev = process.env.NODE_ENV !== 'production'
    logger.error('Error saving contact:', error)
    return NextResponse.json({
      error: 'internal_server_error',
      message: 'Something went wrong. Please try again later.',
      ...(isDev ? { details: error?.message || String(error), stack: error?.stack } : {})
    }, { status: 500 })
  }
}
