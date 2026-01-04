import admin from 'firebase-admin'
import * as fs from 'fs'
import * as path from 'path'
import { logger } from './logger'

/**
 * Server-only Firebase Admin initializer (singleton).
 * Reads service account key from JSON file or environment variable.
 */

interface ServiceAccountWithProjectId extends admin.ServiceAccount {
  project_id?: string
}

if (!admin.apps.length) {
  try {
    // Try to load from environment variables first (for production)
    let serviceAccount: ServiceAccountWithProjectId | null = null

    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    } else {
      const projectId = process.env.FIREBASE_PROJECT_ID
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
      const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')

      if (projectId && clientEmail && privateKey) {
        serviceAccount = {
          projectId,
          clientEmail,
          privateKey,
        }
      }
    }

    if (!serviceAccount) {
      // Fallback to JSON file (for local development)
      const explicitPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH
      const keyPath = explicitPath
        ? path.resolve(process.cwd(), explicitPath)
        : path.join(process.cwd(), 'kashishbeautyparlour-d4956-firebase-adminsdk-fbsvc-e25e646aa8.json')
      if (fs.existsSync(keyPath)) {
        const keyFile = fs.readFileSync(keyPath, 'utf8')
        serviceAccount = JSON.parse(keyFile)
      }
    }

    if (serviceAccount) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: serviceAccount.project_id || serviceAccount.projectId || process.env.FIREBASE_PROJECT_ID,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      })
    } else {
      logger.warn('Firebase Admin credentials missing. Skipping initialization.')
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'production') {
      logger.error('Firebase Admin SDK could not be initialized.', error)
    } else {
      logger.error('Firebase initialization error:', error)
    }
  }
}

// Fallback for firestore if initialization failed
let db: admin.firestore.Firestore | null = null
try {
  if (admin.apps.length) {
    db = admin.firestore()
  }
} catch {
  db = null
}

export { admin as firebaseAdmin, db }
