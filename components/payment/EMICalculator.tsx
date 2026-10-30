'use client'

import { CreditCard, Info } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

interface EMICalculatorProps {
    className?: string
}

/**
 * A static site cannot confirm lender eligibility, rates, or repayment terms.
 * This card truthfully hands payment questions to the salon.
 */
export default function EMICalculator({
    className = ''
}: EMICalculatorProps) {
    const t = useTranslations('Bridal')

    return (
        <section
            aria-labelledby="payment-details-title"
            className={`bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden ${className}`}
        >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="w-6 h-6" aria-hidden="true" />
                    <h2 id="payment-details-title" className="text-xl font-heading font-bold">
                        {t('flexiblePayment')}
                    </h2>
                </div>
                <p className="text-white/80 text-sm">{t('flexiblePaymentDesc')}</p>
            </div>

            <div className="p-6 space-y-5">
                <div className="flex gap-3 rounded-2xl bg-blue-50 p-4 text-sm text-blue-950">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    <p>{t('paymentDetailsNote')}</p>
                </div>

                <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-black transition hover:shadow-lg gold-gradient"
                >
                    <CreditCard className="h-5 w-5" aria-hidden="true" />
                    {t('requestPaymentDetails')}
                </Link>
            </div>
        </section>
    )
}
