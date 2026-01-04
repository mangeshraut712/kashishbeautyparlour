import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kashish Beauty Parlour And Training Center',
  description: 'Privacy Policy for Kashish Beauty Parlour And Training Center.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-gray-900 leading-tight">
          Privacy <span className="gold-text">Policy</span>
        </h1>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-gray-100 space-y-8 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">1. Introduction</h2>
            <p>
              At Kashish Beauty Parlour And Training Center, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">2. Information We Collect</h2>
            <p>
              We collect information that you provide to us directly, such as when you book an appointment, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide and improve our services, communicate with you about your appointments, send you marketing communications (if you have opted in), and for other business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">4. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at kashishparlour15@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
