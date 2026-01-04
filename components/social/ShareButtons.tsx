'use client'

import { useState, useEffect } from 'react'
import { Share2, MessageCircle, Facebook, Link2, Check } from 'lucide-react'

/**
 * Share Buttons Component - Full WhatsApp/Social sharing
 * Allows sharing services, pages, and offers via multiple platforms
 */

interface ShareButtonsProps {
    title: string
    description?: string
    url?: string
    image?: string
    variant?: 'inline' | 'floating' | 'modal'
    className?: string
}

export default function ShareButtons({
    title,
    description = '',
    url,
    variant = 'inline',
    className = ''
}: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [shareUrl, setShareUrl] = useState('')

    useEffect(() => {
        setMounted(true)
        setShareUrl(url || window.location.href)
    }, [url])

    const shareText = `${title}${description ? ` - ${description}` : ''}`

    const handleWhatsAppShare = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`
        window.open(whatsappUrl, '_blank')
    }

    const handleFacebookShare = () => {
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`
        window.open(fbUrl, '_blank', 'width=600,height=400')
    }

    const handleCopyLink = async () => {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text: description,
                    url: shareUrl,
                })
            } catch {
                setShowMenu(true)
            }
        } else {
            setShowMenu(!showMenu)
        }
    }

    // Don't render until mounted to avoid hydration issues
    if (!mounted) return null

    if (variant === 'floating') {
        return (
            <div className={`fixed bottom-24 left-6 z-40 ${className}`}>
                <button
                    onClick={handleNativeShare}
                    className="w-14 h-14 gold-gradient text-black rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Share"
                >
                    <Share2 className="w-6 h-6" />
                </button>

                {showMenu && (
                    <div className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-xl border p-3 space-y-2 min-w-[160px]">
                        <button
                            onClick={handleWhatsAppShare}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-green-50 rounded-xl text-sm font-medium text-gray-700"
                        >
                            <MessageCircle className="w-5 h-5 text-green-500" />
                            WhatsApp
                        </button>
                        <button
                            onClick={handleFacebookShare}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-xl text-sm font-medium text-gray-700"
                        >
                            <Facebook className="w-5 h-5 text-blue-600" />
                            Facebook
                        </button>
                        <button
                            onClick={handleCopyLink}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-xl text-sm font-medium text-gray-700"
                        >
                            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Link2 className="w-5 h-5 text-gray-500" />}
                            {copied ? 'Copied!' : 'Copy Link'}
                        </button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <span className="text-sm text-gray-500 mr-2">Share:</span>
            <button
                onClick={handleWhatsAppShare}
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
                aria-label="Share on WhatsApp"
            >
                <MessageCircle className="w-5 h-5" />
            </button>
            <button
                onClick={handleFacebookShare}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
                aria-label="Share on Facebook"
            >
                <Facebook className="w-5 h-5" />
            </button>
            <button
                onClick={handleCopyLink}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                aria-label="Copy link"
            >
                {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
            </button>
        </div>
    )
}
