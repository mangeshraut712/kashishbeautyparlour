import { NextResponse } from 'next/server'
import { db, firebaseAdmin } from '@/lib/firebaseAdmin'
import { logger } from '@/lib/logger'
import { sendBookingNotification } from '@/lib/notifications'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, phone, email, service, date, message, source, status } = body ?? {}

    if (!firstName || !phone || !service || !message) {
      return NextResponse.json({ error: 'firstName, phone, service and message are required' }, { status: 400 })
    }

    // Check if Firebase is properly configured
    if (!firebaseAdmin.apps.length || !db) {
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
          date: date ? String(date) : 'Soon',
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
          preferredDate: date ? String(date) : null,
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
      preferredDate: date ? String(date) : null,
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
        date: date ? String(date) : 'Soon',
      });
    } catch (notifErr) {
      logger.error('Failed to send notification independently:', notifErr);
    }

    return NextResponse.json({ ok: true, id: docRef.id }, { status: 201 })

  } catch (err: unknown) {
    const error = err as Error;
    logger.error('Error saving contact:', error)
    return NextResponse.json({
      error: 'internal_server_error',
      details: error?.message || String(error),
      stack: error?.stack
    }, { status: 500 })
  }
}
