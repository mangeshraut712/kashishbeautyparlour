import admin from 'firebase-admin'

/**
 * Server-only Firebase Admin initializer (singleton).
 * Expects FIREBASE_SERVICE_ACCOUNT_KEY (JSON string) and FIREBASE_PROJECT_ID in env.
 */
if (!admin.apps.length) {
  const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  if (!key) {
    // When running locally without env, make error explicit
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is not set. Add it to .env.local')
  }
  const serviceAccount = JSON.parse(key)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID,
  })
}

const db = admin.firestore()

export { admin as firebaseAdmin, db }