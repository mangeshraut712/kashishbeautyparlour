import { NextResponse } from 'next/server'
import { db, firebaseAdmin } from '@/lib/firebaseAdmin'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, phone, email, service, date, message, source, status } = body ?? {}

    if (!firstName || !phone || !service || !message) {
      return NextResponse.json({ error: 'firstName, phone, service and message are required' }, { status: 400 })
    }

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

    return NextResponse.json({ ok: true, id: docRef.id }, { status: 201 })
  } catch (err) {
    console.error('Error saving contact:', err)
    return NextResponse.json({ error: 'internal_server_error' }, { status: 500 })
  }
}
