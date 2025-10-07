import * as admin from 'firebase-admin';

/**
 * Firebase Admin SDK Configuration
 * 
 * This module initializes the Firebase Admin SDK for server-side operations.
 * It handles contact form submissions, user authentication, and database operations.
 * 
 * Environment Variables Required:
 * - FIREBASE_PROJECT_ID: Your Firebase project ID
 * - FIREBASE_SERVICE_ACCOUNT_KEY: Your Firebase service account JSON key (production)
 * - FIREBASE_DATABASE_URL: Your Firebase Realtime Database URL (optional)
 * 
 * The initialization uses different approaches for production vs development:
 * - Production: Uses service account key for secure authentication
 * - Development: Uses default credentials (requires Firebase CLI login)
 */

// Initialize Firebase Admin SDK only if not already initialized
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
      // Requires: firebase login (run 'firebase login' in terminal)
      admin.initializeApp({
        projectId: process.env.FIREBASE_PROJECT_ID || 'kashishbeautyparlour-d4956',
      });
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
    // Graceful error handling - app continues without Firebase if initialization fails
  }
}

// Export Firebase services for use in API routes
export const db = admin.firestore(); // Firestore database
export const auth = admin.auth();    // Authentication service
export default admin;                // Full admin SDK
