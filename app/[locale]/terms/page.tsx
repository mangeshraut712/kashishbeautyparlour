import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Kashish Beauty Parlour And Training Center',
  description: 'Terms of Service for Kashish Beauty Parlour And Training Center.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-gray-900 leading-tight">
          Terms of <span className="gold-text">Service</span>
        </h1>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-gray-100 space-y-8 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Kashish Beauty Parlour And Training Center website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">2. Services</h2>
            <p>
              We provide a variety of beauty and wellness services. We reserve the right to modify or discontinue any service at any time without notice. All services are subject to availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">3. Appointments & Cancellations</h2>
            <p>
              We recommend booking appointments in advance. Please provide at least 24 hours&apos; notice for cancellations. Late cancellations or no-shows may be subject to a fee.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">4. Pricing & Payments</h2>
            <p>
              Prices for our services are subject to change without notice. Payment is due at the time of service. We accept various payment methods, including cash and electronic transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">5. Training Programs</h2>
            <p>
              Our training courses are subject to specific terms and conditions provided at the time of enrollment. Completion of a course does not guarantee employment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">6. Limitation of Liability</h2>
            <p>
              Kashish Beauty Parlour And Training Center shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
