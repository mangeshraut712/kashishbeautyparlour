import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, phone, email, service, date, message } = await request.json();

    // Validate required fields
    if (!firstName || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create contact submission data
    const contactData = {
      firstName,
      lastName: lastName || '',
      phone,
      email: email || '',
      service,
      preferredDate: date || null,
      message: message || '',
      submittedAt: new Date(),
      status: 'new', // new, contacted, confirmed, completed
      source: 'website_contact_form'
    };

    // Add to Firestore
    const docRef = await db.collection('contacts').add(contactData);

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      docId: docRef.id
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve contacts (admin use)
export async function GET() {
  try {
    const contactsSnapshot = await db.collection('contacts')
      .orderBy('submittedAt', 'desc')
      .limit(50)
      .get();

    const contacts = contactsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      submittedAt: doc.data().submittedAt?.toDate() || null
    }));

    return NextResponse.json({ contacts });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
