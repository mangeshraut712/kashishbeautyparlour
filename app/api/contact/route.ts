import { NextResponse } from 'next/server'
import { db, firebaseAdmin } from '@/lib/firebaseAdmin'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body ?? {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'name, email and message are required' }, { status: 400 })
    }

    const docRef = await db.collection('contacts').add({
      name: String(name),
      email: String(email),
      phone: phone ? String(phone) : null,
      message: String(message),
      createdAt: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
    })

    return NextResponse.json({ ok: true, id: docRef.id }, { status: 201 })
  } catch (err) {
    console.error('Error saving contact:', err)
    return NextResponse.json({ error: 'internal_server_error' }, { status: 500 })
  }
}
