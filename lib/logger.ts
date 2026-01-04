/**
 * Centralized logger for the application
 * Ensures consistent logging patterns across server and client
 * Automatically handles environment variations
 */

const isDev = process.env.NODE_ENV === 'development'

export const logger = {
    info: (message: string, ...args: unknown[]) => {
        if (isDev) {
            console.info(`[INFO]: ${message}`, ...args)
        }
    },

    warn: (message: string, ...args: unknown[]) => {
        // We might want to see warnings in production too, but formatted
        if (isDev) {
            console.warn(`[WARN]: ${message}`, ...args)
        } else {
            // Optional: send to tracking service in production
        }
    },

    error: (message: string, error?: unknown, ...args: unknown[]) => {
        // Errors should always be logged, but handled gracefully
        console.error(`[ERROR]: ${message}`, error, ...args)

        // In production, you would typically integrate with Sentry or similar here
    },

    debug: (message: string, ...args: unknown[]) => {
        if (isDev) {
            console.log(`[DEBUG]: ${message}`, ...args)
        }
    }
}
