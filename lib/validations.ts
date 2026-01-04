import { z } from 'zod'

/**
 * Modern form validation schemas using Zod
 * Type-safe validation following 2025 best practices
 */

// Contact/Booking form validation
export const contactFormSchema = z.object({
    firstName: z
        .string()
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be less than 50 characters')
        .regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters'),
    lastName: z
        .string()
        .max(50, 'Last name must be less than 50 characters')
        .regex(/^[a-zA-Z\s]*$/, 'Last name can only contain letters')
        .optional()
        .or(z.literal('')),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be less than 15 digits')
        .regex(/^[+]?[\d\s-]+$/, 'Please enter a valid phone number'),
    email: z
        .string()
        .email('Please enter a valid email address')
        .optional()
        .or(z.literal('')),
    service: z
        .string()
        .min(1, 'Please select a service'),
    preferredDate: z
        .string()
        .optional()
        .or(z.literal('')),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be less than 1000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter subscription
export const newsletterSchema = z.object({
    email: z
        .string()
        .email('Please enter a valid email address'),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// Training enrollment
export const enrollmentSchema = z.object({
    fullName: z
        .string()
        .min(2, 'Full name must be at least 2 characters')
        .max(100, 'Full name must be less than 100 characters'),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .regex(/^[+]?[\d\s-]+$/, 'Please enter a valid phone number'),
    email: z
        .string()
        .email('Please enter a valid email address'),
    course: z
        .string()
        .min(1, 'Please select a course'),
    experience: z
        .enum(['none', 'beginner', 'intermediate', 'advanced']),
    message: z
        .string()
        .max(500, 'Message must be less than 500 characters')
        .optional(),
})

export type EnrollmentData = z.infer<typeof enrollmentSchema>

/**
 * Validate form data with Zod schema
 * Returns either validated data or error messages
 */
export function validateForm<T extends z.ZodSchema>(
    schema: T,
    data: unknown
): { success: true; data: z.infer<T> } | { success: false; errors: Record<string, string> } {
    const result = schema.safeParse(data)

    if (result.success) {
        return { success: true, data: result.data }
    }

    const errors: Record<string, string> = {}
    result.error.issues.forEach((issue) => {
        const path = issue.path.join('.')
        errors[path] = issue.message
    })

    return { success: false, errors }
}
