'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, CheckCircle, Clock, Heart } from 'lucide-react'
import { staffMembers } from '@/lib/data/staff'

interface StaffSelectionProps {
    selectedStaff: string | null
    onSelect: (staffId: string | null) => void
    serviceType?: string
}

import { useTranslations } from 'next-intl'

export default function StaffSelection({ selectedStaff, onSelect, serviceType }: StaffSelectionProps) {
    const t = useTranslations('BookingCalendar.StaffSelection')
    const [showAll, setShowAll] = useState(false)

    // Filter staff based on service type if provided
    const relevantStaff = serviceType
        ? staffMembers.filter(staff =>
            staff.specialization.some(s => s.toLowerCase().includes(serviceType.toLowerCase()))
        )
        : staffMembers

    const displayStaff = showAll ? relevantStaff : relevantStaff.slice(0, 3)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-lg">{t('title')}</h3>
                <span className="text-xs text-gray-500">{t('optional')}</span>
            </div>

            {/* No Preference Option */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(null)}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${selectedStaff === null
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
            >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-gray-400" />
                </div>
                <div className="text-left">
                    <p className="font-bold text-gray-900">{t('noPreference')}</p>
                    <p className="text-sm text-gray-500">{t('noPreferenceSub')}</p>
                </div>
                {selectedStaff === null && (
                    <CheckCircle className="w-5 h-5 text-primary ml-auto" />
                )}
            </motion.button>

            {/* Staff Options */}
            <div className="space-y-3">
                {displayStaff.map((staff) => (
                    <motion.button
                        key={staff.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(staff.id)}
                        className={`w-full p-4 rounded-xl border-2 transition-all ${selectedStaff === staff.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Image
                                    src={staff.image}
                                    alt={staff.name}
                                    width={56}
                                    height={56}
                                    className={`rounded-full object-cover ${staff.imagePosition || 'object-center'}`}
                                />
                                {staff.popular && (
                                    <div className="absolute -top-1 -right-1 w-5 h-5 gold-gradient rounded-full flex items-center justify-center">
                                        <Star className="w-3 h-3 text-black fill-black" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 text-left">
                                <div className="flex items-center gap-2">
                                    <p className="font-bold text-gray-900">{staff.name}</p>
                                    {staff.popular && (
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">
                                            {t('topRated')}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500">{staff.role}</p>
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        <span className="text-xs font-bold text-gray-700">{staff.rating}</span>
                                    </div>
                                    <span className="text-xs text-gray-400">({staff.reviews} {t('reviews')})</span>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="flex items-center gap-1 text-xs text-green-600">
                                    <Clock className="w-3 h-3" />
                                    <span>{staff.nextAvailable}</span>
                                </div>
                                {selectedStaff === staff.id && (
                                    <CheckCircle className="w-5 h-5 text-primary mt-2 ml-auto" />
                                )}
                            </div>
                        </div>

                        {/* Specialties */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {staff.specialization.slice(0, 3).map((spec) => (
                                <span
                                    key={spec}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                >
                                    {spec}
                                </span>
                            ))}
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Show More */}
            {relevantStaff.length > 3 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="w-full py-3 text-sm font-bold text-primary hover:underline"
                >
                    {showAll ? t('showLess') : t('showAll', { count: relevantStaff.length })}
                </button>
            )}
        </div>
    )
}
