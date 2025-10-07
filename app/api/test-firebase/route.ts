import { NextResponse } from 'next/server';
import * as admin from 'firebase-admin';

export async function GET() {
  try {
    // Check if Firebase is initialized
    const app = admin.app();
    const projectId = admin.app().options.projectId;
    const hasStorageBucket = !!admin.app().options.storageBucket;

    // Test Firestore access
    const db = admin.firestore();

    // Try to list collections (this might fail without proper permissions)
    let collections: string[] = [];
    try {
      const collectionsRef = await db.listCollections();
      collections = collectionsRef.map(col => col.id);
    } catch (colError) {
      console.log('Collections listing error:', colError);
    }

    // Try to write to test collection
    let testDocId = '';
    let writeError = '';
    try {
      const docRef = db.collection('test').doc();
      await docRef.set({
        test: true,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        source: 'api_test'
      });
      testDocId = docRef.id;
    } catch (writeErr) {
      writeError = writeErr instanceof Error ? writeErr.message : 'Unknown write error';
      console.log('Firestore write error:', writeErr);
    }

    return NextResponse.json({
      status: 'success',
      firebase: {
        initialized: true,
        projectId,
        hasStorageBucket,
        collections: collections.length > 0 ? collections : 'No collections found or no permissions',
        testDocCreated: !!testDocId,
        testDocId: testDocId || null,
        writeError: writeError || null
      }
    });

  } catch (error) {
    console.error('Firebase test error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
        firebase: {
          initialized: false
        }
      },
      { status: 500 }
    );
  }
}
