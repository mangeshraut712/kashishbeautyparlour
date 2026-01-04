'use client'

import { QrCode, Smartphone, CheckCircle } from 'lucide-react'
import Image from 'next/image'

/**
 * UPI Payment Component - Critical for Indian market
 * Displays UPI QR code and payment options
 */

const paymentMethods = [
    { name: 'Google Pay', icon: '📱' },
    { name: 'PhonePe', icon: '💜' },
    { name: 'Paytm', icon: '💙' },
    { name: 'BHIM UPI', icon: '🏦' },
]

interface UPIPaymentProps {
    upiId?: string
    amount?: number
    showQR?: boolean
    className?: string
}

export default function UPIPayment({
    upiId = 'meenaraut15@ybl',
    amount,
    showQR = true,
    className = ''
}: UPIPaymentProps) {
    const upiLink = amount
        ? `upi://pay?pa=${upiId}&pn=Kashish%20Beauty%20Parlour&am=${amount}&cu=INR`
        : `upi://pay?pa=${upiId}&pn=Kashish%20Beauty%20Parlour&cu=INR`

    const handlePayNow = () => {
        window.open(upiLink, '_blank')
    }

    return (
        <div className={`bg-white rounded-2xl p-6 border border-gray-100 ${className}`}>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Pay via UPI</h3>
                    <p className="text-sm text-gray-500">Scan QR or use UPI ID</p>
                </div>
            </div>

            {showQR && (
                <div className="bg-gray-50 rounded-xl p-8 mb-6 flex flex-col items-center justify-center border border-gray-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/images/other/UPI.jpg"
                            alt="Scan to Pay via UPI"
                            width={300}
                            height={300}
                            className="w-full max-w-[300px] h-auto object-contain"
                        />
                    </div>
                    <p className="text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest">Scan to Pay</p>
                </div>
            )}

            <div className="bg-primary/5 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 mb-1">UPI ID</p>
                <div className="flex items-center justify-between">
                    <code className="text-sm font-mono font-bold text-primary">{upiId}</code>
                    <button
                        onClick={() => navigator.clipboard.writeText(upiId)}
                        className="text-xs text-primary hover:text-primary-dark font-medium"
                    >
                        Copy
                    </button>
                </div>
            </div>

            {amount && (
                <div className="bg-green-50 rounded-xl p-4 mb-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                        <p className="text-xs text-green-600">Amount</p>
                        <p className="font-bold text-green-700">₹{amount.toLocaleString('en-IN')}</p>
                    </div>
                </div>
            )}

            <div className="border-t pt-4">
                <p className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    Accepted Payment Apps
                </p>
                <div className="flex flex-wrap gap-2">
                    {paymentMethods.map((method) => (
                        <span
                            key={method.name}
                            className="px-3 py-1.5 bg-gray-50 rounded-full text-xs font-medium text-gray-700"
                        >
                            {method.icon} {method.name}
                        </span>
                    ))}
                </div>
            </div>

            <button
                onClick={handlePayNow}
                className="w-full mt-4 py-3 gold-gradient text-black font-bold rounded-xl transition-all hover:shadow-lg"
            >
                Pay Now via UPI
            </button>
        </div>
    )
}
