import admin from 'firebase-admin'
import * as fs from 'fs'
import * as path from 'path'

/**
 * Server-only Firebase Admin initializer (singleton).
 * Reads service account key from JSON file.
 */
if (!admin.apps.length) {
  try {
    // Try to load from environment variable first (for production)
    let serviceAccount: admin.ServiceAccount

    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    } else {
      // Fallback to JSON file (for local development)
      const keyPath = path.join(process.cwd(), 'kashishbeautyparlour-d4956-firebase-adminsdk-fbsvc-e25e646aa8.json')
      const keyFile = fs.readFileSync(keyPath, 'utf8')
      serviceAccount = JSON.parse(keyFile)
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: (serviceAccount as any).project_id || serviceAccount.projectId,
    })
  } catch (error) {
    console.error('Firebase initialization error:', error)
    throw new Error('Failed to initialize Firebase Admin SDK')
  }
}

const db = admin.firestore()

export { admin as firebaseAdmin, db }
