'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { AlertTriangle, RefreshCw, Home, Bug, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react'
import { logger } from '@/lib/logger'

export default function Error({
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
    // Log error to console in development
    logger.error('Application Error:', error)
  }, [error])

  const copyErrorDetails = () => {
    const details = `
Error: ${error.message}
${error.digest ? `Digest: ${error.digest}` : ''}
Stack: ${error.stack || 'No stack trace available'}
Time: ${new Date().toISOString()}
URL: ${typeof window !== 'undefined' ? window.location.href : 'N/A'}
    `.trim()

    navigator.clipboard.writeText(details)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-bold">!</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-3">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We encountered an unexpected error. Don&apos;t worry, our team has been notified.
          </p>
        </div>

        {/* Error Details Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
          <div className="p-6">
            {/* Error Summary */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bug className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1">Error Details</h3>
                <p className="text-sm text-gray-600 break-words">
                  {error.message || 'An unexpected error occurred'}
                </p>
                {error.digest && (
                  <p className="text-xs text-gray-400 mt-2 font-mono">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            </div>

            {/* Dev Mode: Stack Trace */}
            {isDev && error.stack && (
              <div className="mt-4">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {showDetails ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  {showDetails ? 'Hide' : 'Show'} Stack Trace
                </button>

                {showDetails && (
                  <div className="mt-3 relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs overflow-x-auto max-h-64 scrollbar-thin">
                      <code>{error.stack}</code>
                    </pre>
                    <button
                      onClick={copyErrorDetails}
                      className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      title="Copy error details"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="bg-white px-6 py-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={reset}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              <Link
                href="/"
                className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all border border-gray-100"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            If this problem persists, please{' '}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              contact us
            </Link>
            {' '}for assistance.
          </p>
        </div>

        {/* Dev Mode Warning */}
        {isDev && (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-800">Development Mode</p>
                <p className="text-xs text-amber-700 mt-1">
                  This detailed error view is only visible in development. In production, users will see a simplified error message.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
