'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, Send, Check, Sparkles } from 'lucide-react'

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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const finalAmount = customAmount ? parseInt(customAmount) : amount

    const handleSubmit = async () => {
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsComplete(true)
    }

    if (isComplete) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-gray-100"
            >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                    Gift Card Sent! 🎉
                </h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Your ₹{finalAmount.toLocaleString('en-IN')} gift card has been sent to {recipientEmail}.
                    They&apos;ll receive it within a few minutes.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold">
                    <Gift className="w-5 h-5" />
                    Thank you for spreading joy!
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
                                        onClick={() => setSelectedDesign(design.id)}
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
                                        onClick={() => { setAmount(a); setCustomAmount(''); }}
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
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                <input
                                    type="number"
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
                                        onClick={() => setOccasion(occasion === o ? '' : o)}
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
                            onClick={() => setStep(2)}
                            disabled={finalAmount < 500}
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
                            <label className="block text-sm font-bold text-gray-700 mb-2">Recipient&apos;s Name</label>
                            <input
                                type="text"
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                                placeholder="Enter recipient's name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Recipient&apos;s Email</label>
                            <input
                                type="email"
                                value={recipientEmail}
                                onChange={(e) => setRecipientEmail(e.target.value)}
                                placeholder="Enter email address"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                            <input
                                type="text"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                placeholder="Your name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Personal Message (Optional)</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write a personal message..."
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary resize-none"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(1)}
                                className="flex-1 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50"
                            >
                                Back
                            </button>
                            <button
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
                                <span className="text-gray-600">Will be sent to</span>
                                <span className="font-medium">{recipientEmail}</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setStep(2)}
                                className="flex-1 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="flex-1 py-3 gold-gradient text-black font-bold rounded-xl disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Gift Card
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}
