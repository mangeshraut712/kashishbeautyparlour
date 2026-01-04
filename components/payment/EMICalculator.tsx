'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, CreditCard, CheckCircle, Info } from 'lucide-react'

/**
 * EMI Calculator - Full implementation
 * Calculate EMI for expensive treatments
 */

const emiOptions = [
    { months: 3, interest: 0, label: 'No Cost EMI' },
    { months: 6, interest: 0, label: 'No Cost EMI' },
    { months: 9, interest: 8, label: 'Low Interest' },
    { months: 12, interest: 12, label: 'Standard EMI' },
]

const minimumAmount = 5000

interface EMICalculatorProps {
    amount?: number
    serviceName?: string
    className?: string
}

export default function EMICalculator({
    amount: initialAmount = 10000,
    serviceName = 'Treatment',
    className = ''
}: EMICalculatorProps) {
    const [amount, setAmount] = useState(initialAmount)
    const [selectedTenure, setSelectedTenure] = useState(6)
    const [showDetails, setShowDetails] = useState(false)

    const selectedOption = emiOptions.find(o => o.months === selectedTenure) || emiOptions[1]
    const interestAmount = Math.round(amount * (selectedOption.interest / 100))
    const totalAmount = amount + interestAmount
    const emiAmount = Math.round(totalAmount / selectedTenure)

    const isEligible = amount >= minimumAmount

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden ${className}`}
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Calculator className="w-6 h-6" />
                    <h2 className="text-xl font-heading font-bold">EMI Calculator</h2>
                </div>
                <p className="text-white/80 text-sm">Easy monthly payments for your beauty treatments</p>
            </div>

            <div className="p-6">
                {/* Amount Input */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        Treatment Amount
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value) || 0))}
                            className="w-full pl-10 pr-4 py-4 text-2xl font-bold border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    {!isEligible && (
                        <p className="text-sm text-yellow-600 mt-2 flex items-center gap-1">
                            <Info className="w-4 h-4" />
                            Minimum ₹{minimumAmount.toLocaleString('en-IN')} required for EMI
                        </p>
                    )}
                </div>

                {/* Tenure Selection */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                        Select EMI Tenure
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                        {emiOptions.map((option) => (
                            <button
                                key={option.months}
                                onClick={() => setSelectedTenure(option.months)}
                                className={`p-3 rounded-xl border-2 transition text-center ${selectedTenure === option.months
                                    ? 'border-blue-600 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <p className="text-lg font-bold text-gray-900">{option.months}</p>
                                <p className="text-xs text-gray-500">months</p>
                                {option.interest === 0 && (
                                    <span className="text-xs text-green-600 font-bold">0%</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* EMI Result */}
                {isEligible && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
                        <div className="text-center mb-4">
                            <p className="text-sm text-gray-500 mb-1">Your Monthly EMI</p>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-4xl font-bold text-blue-600">
                                    ₹{emiAmount.toLocaleString('en-IN')}
                                </span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                for {selectedTenure} months
                            </p>
                        </div>

                        {selectedOption.interest === 0 && (
                            <div className="flex items-center justify-center gap-2 text-green-600 bg-green-100 rounded-full py-2 px-4 mx-auto w-fit">
                                <CheckCircle className="w-4 h-4" />
                                <span className="text-sm font-bold">No Cost EMI - Zero Interest!</span>
                            </div>
                        )}
                    </div>
                )}

                {/* Details Toggle */}
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full text-sm text-blue-600 font-medium mb-4"
                >
                    {showDetails ? 'Hide' : 'Show'} EMI Details
                </button>

                {/* EMI Details */}
                {showDetails && isEligible && (
                    <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{serviceName} Amount</span>
                            <span className="font-medium">₹{amount.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Interest ({selectedOption.interest}%)</span>
                            <span className={`font-medium ${interestAmount === 0 ? 'text-green-600' : ''}`}>
                                {interestAmount === 0 ? 'FREE' : `₹${interestAmount.toLocaleString('en-IN')}`}
                            </span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                            <span className="font-bold text-gray-900">Total Payable</span>
                            <span className="font-bold text-gray-900">₹{totalAmount.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Monthly EMI × {selectedTenure}</span>
                            <span className="font-medium">₹{emiAmount.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                )}

                {/* Payment Partners */}
                <div className="border-t pt-6">
                    <p className="text-xs text-gray-500 mb-3 text-center">
                        EMI available via
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {['HDFC', 'ICICI', 'SBI', 'Axis', 'Kotak', 'Bajaj Finserv'].map((bank) => (
                            <span
                                key={bank}
                                className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                            >
                                {bank}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <button className="w-full mt-6 py-4 gold-gradient text-black font-bold rounded-xl transition hover:shadow-lg flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Apply for EMI
                </button>

                <p className="text-center text-xs text-gray-400 mt-3">
                    * Subject to bank approval. T&C apply.
                </p>
            </div>
        </motion.div>
    )
}
