'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, CheckCircle, Heart, Sparkles, Plus, Minus } from 'lucide-react'

/**
 * Wedding Package Calculator - Full interactive implementation
 * Allows brides to customize and calculate their bridal package cost
 */

const basePackages = [
    { id: 'essential', name: 'Essential Bridal', basePrice: 15000 },
    { id: 'premium', name: 'Premium Bridal', basePrice: 25000 },
    { id: 'luxury', name: 'Luxury Bridal', basePrice: 35000 },
]

const addOns = [
    { id: 'mehendi', name: 'Mehendi Ceremony Look', price: 3000 },
    { id: 'sangeet', name: 'Sangeet Night Look', price: 4000 },
    { id: 'haldi', name: 'Haldi Ceremony Look', price: 2500 },
    { id: 'reception', name: 'Reception Look', price: 5000 },
    { id: 'engagement', name: 'Engagement Look', price: 4500 },
    { id: 'prewedding', name: 'Pre-wedding Photoshoot', price: 6000 },
    { id: 'trial', name: 'Extra Trial Session', price: 2000 },
    { id: 'groom', name: 'Groom Makeover', price: 3500 },
    { id: 'family1', name: 'Family Member (1 person)', price: 2500 },
    { id: 'family3', name: 'Family Package (3 persons)', price: 6000 },
    { id: 'homeservice', name: 'Home Service (within Pune)', price: 2000 },
    { id: 'destinations', name: 'Destination Charge (outside Pune)', price: 5000 },
]

export default function WeddingPackageCalculator() {
    const [selectedPackage, setSelectedPackage] = useState<string>('premium')
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
    const [familyCount, setFamilyCount] = useState(0)

    const basePackage = basePackages.find(p => p.id === selectedPackage)
    const basePrice = basePackage?.basePrice || 0

    const addOnsTotal = selectedAddOns.reduce((total, addOnId) => {
        if (addOnId === 'family_custom') {
            return total + (familyCount * 2500)
        }
        const addOn = addOns.find(a => a.id === addOnId)
        return total + (addOn?.price || 0)
    }, 0)

    const totalPrice = basePrice + addOnsTotal
    const discount = selectedAddOns.length >= 3 ? Math.round(totalPrice * 0.1) : 0
    const finalPrice = totalPrice - discount

    const toggleAddOn = (id: string) => {
        setSelectedAddOns(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Calculator className="w-6 h-6" />
                    <h2 className="text-xl font-heading font-bold">Bridal Package Calculator</h2>
                </div>
                <p className="text-white/80 text-sm">Customize your perfect wedding package</p>
            </div>

            <div className="p-6">
                {/* Base Package Selection */}
                <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        Choose Base Package
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {basePackages.map((pkg) => (
                            <button
                                key={pkg.id}
                                onClick={() => setSelectedPackage(pkg.id)}
                                className={`p-4 rounded-xl border-2 transition-all text-left ${selectedPackage === pkg.id
                                    ? 'border-pink-500 bg-pink-50'
                                    : 'border-gray-200 hover:border-pink-300'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-gray-900">{pkg.name}</span>
                                    {selectedPackage === pkg.id && (
                                        <CheckCircle className="w-5 h-5 text-pink-500" />
                                    )}
                                </div>
                                <p className="text-xl font-bold text-pink-600">
                                    ₹{pkg.basePrice.toLocaleString('en-IN')}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Add-ons */}
                <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-pink-500" />
                        Add Extra Services
                        {selectedAddOns.length >= 3 && (
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                10% Bundle Discount!
                            </span>
                        )}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {addOns.map((addOn) => (
                            <button
                                key={addOn.id}
                                onClick={() => toggleAddOn(addOn.id)}
                                className={`p-3 rounded-xl border transition-all text-left flex items-center justify-between ${selectedAddOns.includes(addOn.id)
                                    ? 'border-pink-500 bg-pink-50'
                                    : 'border-gray-200 hover:border-pink-300'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAddOns.includes(addOn.id)
                                        ? 'border-pink-500 bg-pink-500'
                                        : 'border-gray-300'
                                        }`}>
                                        {selectedAddOns.includes(addOn.id) && (
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        )}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{addOn.name}</span>
                                </div>
                                <span className="text-sm font-bold text-pink-600">
                                    +₹{addOn.price.toLocaleString('en-IN')}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Custom Family Members */}
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-900">Additional Family Members</p>
                                <p className="text-xs text-gray-500">₹2,500 per person</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setFamilyCount(Math.max(0, familyCount - 1))}
                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                                    disabled={familyCount === 0}
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center font-bold">{familyCount}</span>
                                <button
                                    onClick={() => setFamilyCount(familyCount + 1)}
                                    className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Package Summary</h3>

                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{basePackage?.name}</span>
                            <span className="font-medium">₹{basePrice.toLocaleString('en-IN')}</span>
                        </div>
                        {selectedAddOns.map((addOnId) => {
                            const addOn = addOns.find(a => a.id === addOnId)
                            if (!addOn) return null
                            return (
                                <div key={addOnId} className="flex justify-between text-sm">
                                    <span className="text-gray-600">{addOn.name}</span>
                                    <span className="font-medium">₹{addOn.price.toLocaleString('en-IN')}</span>
                                </div>
                            )
                        })}
                        {familyCount > 0 && (
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Family Members ({familyCount})</span>
                                <span className="font-medium">₹{(familyCount * 2500).toLocaleString('en-IN')}</span>
                            </div>
                        )}
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Subtotal</span>
                            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                        </div>
                        {discount > 0 && (
                            <div className="flex justify-between text-sm text-green-600 mb-1">
                                <span>Bundle Discount (10%)</span>
                                <span>-₹{discount.toLocaleString('en-IN')}</span>
                            </div>
                        )}
                        <div className="flex justify-between text-xl font-bold mt-3">
                            <span className="text-gray-900">Total</span>
                            <span className="text-pink-600">₹{finalPrice.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <a
                    href="#inquiry"
                    className="w-full mt-6 py-4 gold-gradient text-black font-bold rounded-xl transition hover:shadow-lg flex items-center justify-center gap-2"
                >
                    <Heart className="w-5 h-5" />
                    Book This Package
                </a>

                <p className="text-center text-xs text-gray-400 mt-4">
                    * Prices are indicative. Final quote after consultation.
                </p>
            </div>
        </motion.div>
    )
}
