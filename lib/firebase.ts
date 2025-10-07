import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    // For production, use service account key
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID || 'kashishbeautyparlour-d4956',
        databaseURL: process.env.FIREBASE_DATABASE_URL || 'https://kashishbeautyparlour-d4956-default-rtdb.firebaseio.com',
      });
    } else {
      // For local development, use default credentials
      admin.initializeApp({
        projectId: process.env.FIREBASE_PROJECT_ID || 'kashishbeautyparlour-d4956',
      });
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

export const db = admin.firestore();
export const auth = admin.auth();
export default admin;
