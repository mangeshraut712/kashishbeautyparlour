import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

export async function POST(request: NextRequest) {
  try {
    // Log environment variables (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('Firebase env check:', {
        hasServiceAccountKey: !!process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
    }

    const { firstName, lastName, phone, email, service, date, message } = await request.json();

    // Validate required fields
    if (!firstName || !phone || !service) {
      console.log('Missing required fields:', { firstName, phone, service });
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

    console.log('Attempting to save contact data:', contactData);

    // Add to Firestore
    const docRef = await db.collection('contacts').add(contactData);

    console.log('Contact form submitted successfully, docId:', docRef.id);

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      docId: docRef.id
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Failed to submit contact form', details: error instanceof Error ? error.message : 'Unknown error' },
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
