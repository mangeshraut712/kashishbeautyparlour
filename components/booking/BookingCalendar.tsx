'use client'

import { useState, useEffect, useMemo } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ChevronLeft, ChevronRight, Check, User, Phone, Sparkles } from 'lucide-react'
import { services } from '@/lib/data/services'
import StaffSelection from './StaffSelection'

/**
 * Online Booking Calendar - Critical for 2025 Indian market
 * Allows customers to select date, time, and service for booking
 */

const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
    '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM',
]

interface BookingCalendarProps {
    onBookingComplete?: (booking: BookingData) => void
}

interface BookingData {
    name: string
    phone: string
    service: string
    date: Date
    time: string
}

export default function BookingCalendar({ onBookingComplete }: BookingCalendarProps) {
    const [step, setStep] = useState(1)
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedStaff, setSelectedStaff] = useState<string | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [selectedService, setSelectedService] = useState<string>('')
    const [formData, setFormData] = useState({ name: '', phone: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const t = useTranslations('BookingCalendar')
    const locale = useLocale()

    useEffect(() => {
        setIsMounted(true)
        setCurrentMonth(new Date())
    }, [])

    // Get days in month
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDay = firstDay.getDay()

        const days: (Date | null)[] = []

        // Add empty days for padding
        for (let i = 0; i < startingDay; i++) {
            days.push(null)
        }

        // Add actual days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i))
        }

        return days
    }

    const days = getDaysInMonth(currentMonth)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Locale-aware date formatting
    const weekDays = useMemo(() => {
        const baseDate = new Date(2025, 0, 5) // Sunday
        return Array.from({ length: 7 }).map((_, i) => {
            const d = new Date(baseDate)
            d.setDate(baseDate.getDate() + i)
            return d.toLocaleDateString(locale, { weekday: 'short' })
        })
    }, [locale])



    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    }

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    }

    const isDateDisabled = (date: Date | null) => {
        if (!date) return true
        return date < today
    }

    const handleSubmit = async () => {
        if (!selectedDate || !selectedTime || !selectedService || !formData.name || !formData.phone) return

        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        const booking: BookingData = {
            name: formData.name,
            phone: formData.phone,
            service: selectedService,
            date: selectedDate,
            time: selectedTime,
        }

        onBookingComplete?.(booking)
        setStep(5) // Success step
        setIsSubmitting(false)
    }

    if (!isMounted) return <div className="min-h-[400px] flex items-center justify-center bg-gray-50 rounded-[2rem] border border-gray-100">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
    </div>

    return (
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-luxury-dark text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-heading font-bold">{t('title')}</h2>
                </div>
                <p className="text-white/50 text-sm">{t('subtitle')}</p>

                {/* Progress Steps */}
                <div className="flex items-center gap-2 mt-4">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'bg-primary text-black' : 'bg-white/10 text-white/40'
                                }`}>
                                {step > s ? <Check className="w-4 h-4" /> : s}
                            </div>
                            {s < 4 && (
                                <div className={`w-8 h-0.5 ${step > s ? 'bg-primary' : 'bg-white/10'}`} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6">
                <AnimatePresence mode="wait">
                    {/* Step 1: Select Service & Date */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-700 mb-2">{t('selectService')}</label>
                                <select
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                >
                                    <option value="">{t('chooseServicePlaceholder')}</option>
                                    {services.slice(0, 20).map((service) => (
                                        <option key={service.id} value={service.name}>
                                            {service.name} - {service.price}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-4">
                                <button
                                    onClick={handlePrevMonth}
                                    className="p-2 hover:bg-gray-100 text-gray-600 rounded-full transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <h3 className="font-bold text-gray-900">
                                    {currentMonth.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
                                </h3>
                                <button
                                    onClick={handleNextMonth}
                                    className="p-2 hover:bg-gray-100 text-gray-600 rounded-full transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Week Days */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {weekDays.map((day) => (
                                    <div key={day} className="text-center text-xs font-bold text-gray-400 py-2">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1 mb-6">
                                {days.map((day, index) => (
                                    <button
                                        key={index}
                                        disabled={isDateDisabled(day)}
                                        onClick={() => day && setSelectedDate(day)}
                                        className={`aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all ${!day
                                            ? 'invisible'
                                            : isDateDisabled(day)
                                                ? 'text-gray-200 cursor-not-allowed'
                                                : selectedDate?.toDateString() === day.toDateString()
                                                    ? 'bg-primary text-black shadow-lg'
                                                    : 'hover:bg-gray-100 text-gray-600'
                                            }`}
                                    >
                                        {day?.getDate()}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                disabled={!selectedDate || !selectedService}
                                className="w-full py-3 gold-gradient text-black font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                            >
                                {t('buttons.continue')}
                            </button>
                        </motion.div>
                    )}

                    {/* Step 2: Select Staff */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <StaffSelection
                                selectedStaff={selectedStaff}
                                onSelect={(id) => setSelectedStaff(id)}
                                serviceType={selectedService}
                            />

                            <div className="flex gap-3 mt-8">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex-1 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all"
                                >
                                    {t('buttons.back')}
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    className="flex-1 py-3 gold-gradient text-black font-bold rounded-xl transition-all shadow-lg"
                                >
                                    {t('buttons.continue')}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Select Time */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="mb-4">
                                <p className="text-sm text-gray-500">
                                    Selected: <span className="font-bold text-gray-900">
                                        {selectedDate?.toLocaleDateString(locale, {
                                            weekday: 'long',
                                            day: 'numeric',
                                            month: 'long'
                                        })}
                                    </span>
                                </p>
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                                <Clock className="w-5 h-5 text-primary" />
                                <h3 className="font-bold text-gray-900">{t('selectTime')}</h3>
                            </div>

                            <div className="grid grid-cols-4 gap-2 mb-6">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-2 px-3 text-sm font-medium rounded-lg transition-all ${selectedTime === time
                                            ? 'bg-primary text-black shadow-lg'
                                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setStep(2)}
                                    className="flex-1 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all"
                                >
                                    {t('buttons.back')}
                                </button>
                                <button
                                    onClick={() => setStep(4)}
                                    disabled={!selectedTime}
                                    className="flex-1 py-3 gold-gradient text-black font-bold rounded-xl disabled:opacity-50 transition-all shadow-lg"
                                >
                                    {t('buttons.continue')}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 4: Contact Details */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        <User className="w-4 h-4 inline mr-2" />
                                        {t('yourName')}
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder={t('namePlaceholder')}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        <Phone className="w-4 h-4 inline mr-2" />
                                        {t('yourPhone')}
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder={t('phonePlaceholder')}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Booking Summary */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-3">{t('bookingSummary')}</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">{t('summaryLabels.service')}</span>
                                        <span className="font-medium text-gray-900">{selectedService}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">{t('summaryLabels.beautician')}</span>
                                        <span className="font-medium text-primary uppercase text-xs tracking-tighter">
                                            {selectedStaff || 'First Available'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">{t('summaryLabels.date')}</span>
                                        <span className="font-medium text-gray-900">
                                            {selectedDate?.toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">{t('summaryLabels.time')}</span>
                                        <span className="font-medium text-gray-900">{selectedTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setStep(3)}
                                    className="flex-1 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all"
                                >
                                    {t('buttons.back')}
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!formData.name || !formData.phone || isSubmitting}
                                    className="flex-1 py-3 gold-gradient text-black font-bold rounded-xl disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
                                            {t('buttons.booking')}
                                        </>
                                    ) : (
                                        t('buttons.confirm')
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 5: Success */}
                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                                {t('success.title')}
                            </h3>
                            <p className="text-gray-500 mb-6 font-medium">
                                {t('success.message')}
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                                <Sparkles className="w-4 h-4" />
                                {t('success.seeYou')}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div >
    )
}
