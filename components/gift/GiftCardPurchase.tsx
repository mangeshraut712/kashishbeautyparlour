'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, Send, Check, Sparkles } from 'lucide-react'
import { buildWhatsAppLink } from '@/lib/whatsapp'

/**
 * Gift Card Component - Full implementation
 * Purchase and send gift cards for services
 */

const giftCardDesigns = [
    { id: 'gold', name: 'Luxury Gold', gradient: 'from-primary via-accent to-primary', image: '/images/other/about-picture.jpeg' },
    { id: 'pink', name: 'Blush Pink', gradient: 'from-pink-400 via-rose-500 to-pink-600', image: null },
    { id: 'purple', name: 'Royal Purple', gradient: 'from-purple-500 via-indigo-500 to-purple-600', image: null },
]

const presetAmounts = [500, 1000, 2000, 3000, 5000, 10000]

const occasions = [
    'Birthday 🎂',
    'Wedding 💒',
    'Anniversary 💕',
    'Thank You 🙏',
    'Just Because 💝',
    'Mothers Day 👩',
    'Diwali 🪔',
]

export default function GiftCardPurchase() {
    const [selectedDesign, setSelectedDesign] = useState('gold')
    const [amount, setAmount] = useState(2000)
    const [customAmount, setCustomAmount] = useState('')
    const [recipientName, setRecipientName] = useState('')
    const [recipientEmail, setRecipientEmail] = useState('')
    const [senderName, setSenderName] = useState('')
    const [message, setMessage] = useState('')
    const [occasion, setOccasion] = useState('')
    const [step, setStep] = useState(1)
    const [isRequestReady, setIsRequestReady] = useState(false)

    const customAmountValue = Number(customAmount)
    const hasCustomAmount = customAmount.trim() !== ''
    const isCustomAmountValid = !hasCustomAmount || (Number.isFinite(customAmountValue) && customAmountValue >= 500)
    const finalAmount = hasCustomAmount && Number.isFinite(customAmountValue) ? customAmountValue : amount

    const giftCardRequestHref = buildWhatsAppLink([
        'Hello Kashish Beauty Parlour,',
        '',
        'I would like to request a gift card.',
        `Value: ₹${finalAmount.toLocaleString('en-IN')}`,
        `Recipient: ${recipientName}`,
        `Recipient email: ${recipientEmail}`,
        `From: ${senderName}`,
        occasion ? `Occasion: ${occasion}` : '',
        message ? `Message: ${message}` : '',
        '',
        'Please share the available payment and delivery options.',
    ].filter(Boolean).join('\n'))

    if (isRequestReady) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-gray-100"
            >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                    Gift-card request ready
                </h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Online checkout and delivery are not available on this site. Open WhatsApp and send the prepared request to ask about payment and delivery options.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                        href={giftCardRequestHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full gold-gradient px-6 py-3 font-bold text-black"
                    >
                        <Send className="w-5 h-5" />
                        Continue on WhatsApp
                    </a>
                    <button
                        type="button"
                        onClick={() => setIsRequestReady(false)}
                        className="rounded-full border border-gray-200 px-6 py-3 font-bold text-gray-700"
                    >
                        Edit request
                    </button>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-black">
                <div className="flex items-center gap-3 mb-2">
                    <Gift className="w-6 h-6" />
                    <h2 className="text-xl font-heading font-bold">Gift Card</h2>
                </div>
                <p className="text-black/80 text-sm">Give the gift of beauty to someone special</p>
            </div>

            {/* Progress */}
            <div className="px-6 py-4 bg-gray-50 border-b">
                <div className="flex items-center justify-between max-w-sm mx-auto">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? 'bg-primary text-black' : 'bg-gray-200 text-gray-500'
                                }`}>
                                {step > s ? <Check className="w-4 h-4" /> : s}
                            </div>
                            {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 max-w-sm mx-auto mt-2">
                    <span>Design</span>
                    <span>Details</span>
                    <span>Send</span>
                </div>
            </div>

            <div className="p-6">
                {/* Step 1: Design & Amount */}
                {step === 1 && (
                    <div className="space-y-6">
                        {/* Design Selection */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-3">Choose Design</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {giftCardDesigns.map((design) => (
                                    <button
                                        key={design.id}
                                        type="button"
                                        onClick={() => setSelectedDesign(design.id)}
                                        aria-label={design.name}
                                        aria-pressed={selectedDesign === design.id}
                                        className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition ${selectedDesign === design.id ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'
                                            }`}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${design.gradient}`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Sparkles className="w-8 h-8 text-white/80" />
                                        </div>
                                        {selectedDesign === design.id && (
                                            <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Amount Selection */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-3">Select Amount</h3>
                            <div className="grid grid-cols-3 gap-2 mb-3">
                                {presetAmounts.map((a) => (
                                    <button
                                        key={a}
                                        type="button"
                                        onClick={() => { setAmount(a); setCustomAmount(''); }}
                                        aria-pressed={amount === a && !customAmount}
                                        className={`py-3 rounded-xl font-bold transition ${amount === a && !customAmount
                                            ? 'bg-primary text-black'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        ₹{a.toLocaleString('en-IN')}
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <label htmlFor="gift-card-custom-amount" className="sr-only">Custom gift card value</label>
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                <input
                                    id="gift-card-custom-amount"
                                    type="number"
                                    min={500}
                                    step={100}
                                    value={customAmount}
                                    onChange={(e) => setCustomAmount(e.target.value)}
                                    placeholder="Custom amount"
                                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Occasion */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-3">Occasion (Optional)</h3>
                            <div className="flex flex-wrap gap-2">
                                {occasions.map((o) => (
                                    <button
                                        key={o}
                                        type="button"
                                        onClick={() => setOccasion(occasion === o ? '' : o)}
                                        aria-pressed={occasion === o}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${occasion === o
                                            ? 'bg-primary text-black'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {o}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            disabled={!isCustomAmountValid || finalAmount < 500}
                            className="w-full py-4 gold-gradient text-black font-bold rounded-xl disabled:opacity-50"
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/* Step 2: Recipient Details */}
                {step === 2 && (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="gift-card-recipient-name" className="block text-sm font-bold text-gray-700 mb-2">Recipient&apos;s Name</label>
                            <input
                                id="gift-card-recipient-name"
                                type="text"
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                                placeholder="Enter recipient's name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="gift-card-recipient-email" className="block text-sm font-bold text-gray-700 mb-2">Recipient&apos;s Email</label>
                            <input
                                id="gift-card-recipient-email"
                                type="email"
                                value={recipientEmail}
                                onChange={(e) => setRecipientEmail(e.target.value)}
                                placeholder="Enter email address"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="gift-card-sender-name" className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                            <input
                                id="gift-card-sender-name"
                                type="text"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                placeholder="Your name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="gift-card-message" className="block text-sm font-bold text-gray-700 mb-2">Personal Message (Optional)</label>
                            <textarea
                                id="gift-card-message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write a personal message..."
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary resize-none"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="flex-1 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep(3)}
                                disabled={!recipientName || !recipientEmail || !senderName}
                                className="flex-1 py-3 gold-gradient text-black font-bold rounded-xl disabled:opacity-50"
                            >
                                Preview
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Preview & Send */}
                {step === 3 && (
                    <div className="space-y-6">
                        {/* Preview Card */}
                        <motion.div
                            whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className={`relative rounded-3xl overflow-hidden p-8 bg-gradient-to-br ${giftCardDesigns.find(d => d.id === selectedDesign)?.gradient
                                } text-white shadow-2xl h-56 flex flex-col justify-between group cursor-default`}
                        >
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />

                            <div className="relative z-10 flex justify-between items-start">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70 mb-1">Premium Gift Card</p>
                                    <div className="w-12 h-8 bg-white/20 rounded-md backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <div className="w-4 h-4 bg-primary/40 rounded-full" />
                                    </div>
                                </div>
                                <Gift className="w-8 h-8 opacity-50" />
                            </div>

                            <div className="relative z-10">
                                <p className="text-4xl font-bold tracking-tight">₹{finalAmount.toLocaleString('en-IN')}</p>
                                <div className="flex justify-between items-end mt-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-widest opacity-60">Recipient</p>
                                        <p className="text-sm font-bold truncate max-w-[150px]">{recipientName || 'Name'}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase tracking-widest opacity-60">From</p>
                                        <p className="text-sm font-bold truncate max-w-[150px]">{senderName || 'Your Name'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest opacity-40 font-bold">
                                Kashish Beauty Parlour And Training Center • Thergaon, Pune
                            </div>
                        </motion.div>

                        {/* Summary */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Gift Card Value</span>
                                <span className="font-bold">₹{finalAmount.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Recipient email</span>
                                <span className="font-medium">{recipientEmail}</span>
                            </div>
                        </div>

                        <p role="note" className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-950">
                            No payment is taken and no gift card is delivered from this website.
                        </p>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                className="flex-1 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsRequestReady(true)}
                                className="flex-1 py-3 gold-gradient text-black font-bold rounded-xl flex items-center justify-center gap-2"
                            >
                                <>
                                    <Send className="w-5 h-5" />
                                    Prepare WhatsApp Request
                                </>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
