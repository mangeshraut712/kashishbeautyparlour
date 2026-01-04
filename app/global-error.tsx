'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, RefreshCw, Bug, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react'

/**
 * Global Error Boundary
 * Catches errors that occur in the root layout
 * This is the last resort error handler
 */
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const [showDetails, setShowDetails] = useState(false)
    const [copied, setCopied] = useState(false)
    const isDev = process.env.NODE_ENV === 'development'

    useEffect(() => {
        // Log critical error
        console.error('Critical Application Error:', error)
    }, [error])

    const copyErrorDetails = () => {
        const details = `
Critical Error: ${error.message}
${error.digest ? `Digest: ${error.digest}` : ''}
Stack: ${error.stack || 'No stack trace available'}
Time: ${new Date().toISOString()}
    `.trim()

        navigator.clipboard.writeText(details)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <html lang="en">
            <body style={{
                margin: 0,
                fontFamily: 'system-ui, -apple-system, sans-serif',
                backgroundColor: '#f9fafb'
            }}>
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem'
                }}>
                    <div style={{ maxWidth: '500px', width: '100%' }}>
                        {/* Error Icon */}
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <div style={{
                                width: '96px',
                                height: '96px',
                                backgroundColor: '#fef2f2',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                                position: 'relative'
                            }}>
                                <AlertTriangle style={{ width: '48px', height: '48px', color: '#ef4444' }} />
                            </div>
                        </div>

                        {/* Error Message */}
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h1 style={{
                                fontSize: '1.875rem',
                                fontWeight: 'bold',
                                color: '#111827',
                                margin: '0 0 0.75rem 0'
                            }}>
                                Critical Error
                            </h1>
                            <p style={{
                                color: '#4b5563',
                                fontSize: '1.125rem',
                                margin: 0,
                                lineHeight: 1.6
                            }}>
                                Something went seriously wrong. The application could not recover from this error.
                            </p>
                        </div>

                        {/* Error Card */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            border: '1px solid #e5e7eb',
                            overflow: 'hidden',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#fef2f2',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Bug style={{ width: '20px', height: '20px', color: '#dc2626' }} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <h3 style={{
                                            fontWeight: 'bold',
                                            color: '#111827',
                                            margin: '0 0 0.25rem 0',
                                            fontSize: '1rem'
                                        }}>
                                            Error Details
                                        </h3>
                                        <p style={{
                                            fontSize: '0.875rem',
                                            color: '#4b5563',
                                            margin: 0,
                                            wordBreak: 'break-word'
                                        }}>
                                            {error.message || 'An unexpected critical error occurred'}
                                        </p>
                                        {error.digest && (
                                            <p style={{
                                                fontSize: '0.75rem',
                                                color: '#9ca3af',
                                                margin: '0.5rem 0 0 0',
                                                fontFamily: 'monospace'
                                            }}>
                                                Error ID: {error.digest}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Dev Mode: Stack Trace */}
                                {isDev && error.stack && (
                                    <div style={{ marginTop: '1rem' }}>
                                        <button
                                            onClick={() => setShowDetails(!showDetails)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                                color: '#374151',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                padding: 0
                                            }}
                                        >
                                            {showDetails ? (
                                                <ChevronUp style={{ width: '16px', height: '16px' }} />
                                            ) : (
                                                <ChevronDown style={{ width: '16px', height: '16px' }} />
                                            )}
                                            {showDetails ? 'Hide' : 'Show'} Stack Trace
                                        </button>

                                        {showDetails && (
                                            <div style={{ marginTop: '0.75rem', position: 'relative' }}>
                                                <pre style={{
                                                    backgroundColor: '#111827',
                                                    color: '#f3f4f6',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    fontSize: '0.75rem',
                                                    overflowX: 'auto',
                                                    maxHeight: '250px',
                                                    margin: 0
                                                }}>
                                                    <code>{error.stack}</code>
                                                </pre>
                                                <button
                                                    onClick={copyErrorDetails}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '8px',
                                                        right: '8px',
                                                        padding: '8px',
                                                        backgroundColor: '#1f2937',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        cursor: 'pointer'
                                                    }}
                                                    title="Copy error details"
                                                >
                                                    {copied ? (
                                                        <Check style={{ width: '16px', height: '16px', color: '#4ade80' }} />
                                                    ) : (
                                                        <Copy style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Action Button */}
                            <div style={{
                                backgroundColor: '#f9fafb',
                                padding: '1rem 1.5rem',
                                borderTop: '1px solid #e5e7eb'
                            }}>
                                <button
                                    onClick={reset}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        backgroundColor: '#D4AF37',
                                        color: '#000',
                                        fontWeight: 'bold',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '12px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        transition: 'background-color 0.2s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c9a432'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#D4AF37'}
                                >
                                    <RefreshCw style={{ width: '20px', height: '20px' }} />
                                    Reload Application
                                </button>
                            </div>
                        </div>

                        {/* Dev Warning */}
                        {isDev && (
                            <div style={{
                                padding: '1rem',
                                backgroundColor: '#fffbeb',
                                border: '1px solid #fde68a',
                                borderRadius: '12px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <AlertTriangle style={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#d97706',
                                        flexShrink: 0,
                                        marginTop: '2px'
                                    }} />
                                    <div>
                                        <p style={{
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            color: '#92400e',
                                            margin: 0
                                        }}>
                                            Development Mode
                                        </p>
                                        <p style={{
                                            fontSize: '0.75rem',
                                            color: '#a16207',
                                            margin: '0.25rem 0 0 0'
                                        }}>
                                            This is a global error boundary. The detailed view is only visible in development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </body>
        </html>
    )
}
