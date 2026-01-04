'use server'

import { contactFormSchema } from '@/lib/validations'
import { db } from '@/lib/firebaseAdmin'
import { logger } from '@/lib/logger'

export type FormState = {
    success: boolean
    message: string
    errors?: Record<string, string>
}

/**
 * Modern Server Action for contact form submission
 * Uses Zod validation and type-safe patterns
 */
export async function submitContactForm(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const isProd = process.env.NODE_ENV === 'production'
    // Extract form data
    const rawData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        service: formData.get('service'),
        preferredDate: formData.get('preferredDate'),
        message: formData.get('message'),
    }

    // Validate with Zod
    const validatedFields = contactFormSchema.safeParse(rawData)

    if (!validatedFields.success) {
        const errors: Record<string, string> = {}
        validatedFields.error.issues.forEach((issue: { path: (string | number)[]; message: string }) => {
            const path = issue.path.join('.')
            errors[path] = issue.message
        })
        return {
            success: false,
            message: 'Please fix the errors below.',
            errors,
        }
    }

    const data = validatedFields.data

    try {
        // Check if database is available
        if (!db) {
            if (isProd) {
                logger.error('Firebase not configured in production. Contact submission rejected.')
                return {
                    success: false,
                    message: 'Service unavailable. Please call or WhatsApp us directly.',
                }
            }
            // Simulate success for development without Firebase
            logger.debug('Form data received', data)

            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1000))

            return {
                success: true,
                message: 'Thank you! Your message has been received. We will contact you soon.',
            }
        }

        // Save to Firebase Firestore
        await db.collection('contacts').add({
            ...data,
            source: 'website_contact_form',
            status: 'new',
            submittedAt: new Date().toISOString(),
        })

        return {
            success: true,
            message: 'Thank you! Your booking request has been submitted. We will contact you shortly.',
        }
    } catch (error) {
        logger.error('Error submitting contact form:', error)
        return {
            success: false,
            message: 'Something went wrong. Please try again or contact us directly.',
        }
    }
}

/**
 * Server Action for newsletter subscription
 */
export async function subscribeNewsletter(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const isProd = process.env.NODE_ENV === 'production'
    const email = formData.get('email')

    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return {
            success: false,
            message: 'Please enter a valid email address.',
        }
    }

    try {
        if (!db) {
            if (isProd) {
                logger.error('Firebase not configured in production. Newsletter subscription rejected.')
                return {
                    success: false,
                    message: 'Service unavailable. Please try again later.',
                }
            }
            logger.debug('Newsletter subscription', email)
            await new Promise((resolve) => setTimeout(resolve, 500))
            return {
                success: true,
                message: 'Thank you for subscribing!',
            }
        }

        await db.collection('newsletter').add({
            email,
            subscribedAt: new Date().toISOString(),
        })

        return {
            success: true,
            message: 'Thank you for subscribing to our newsletter!',
        }
    } catch (error) {
        logger.error('Error subscribing to newsletter:', error)
        return {
            success: false,
            message: 'Failed to subscribe. Please try again.',
        }
    }
}
