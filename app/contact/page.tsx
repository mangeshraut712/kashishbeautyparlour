'use client';

import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        service: formData.get('service'),
        date: formData.get('preferredDate'),
        message: formData.get('message'),
        source: 'website_contact_form',
        status: 'new',
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();

      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Get in touch for appointments, consultations, or any beauty-related queries
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Book Your Appointment
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="lastName"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="bridal-makeup">Bridal Makeup</option>
                    <option value="party-makeup">Party Makeup</option>
                    <option value="hair-styling">Hair Styling</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="nail-art">Manicure & Pedicure</option>
                    <option value="spa">Spa & Massage</option>
                    <option value="training">Beauty Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      {BUSINESS_INFO.address.full}
                    </p>
                    <a
                      href={BUSINESS_INFO.maps.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href={`tel:+917276784825`}
                      className="text-gray-600 hover:text-primary transition"
                    >
                      +91 72767 84825
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.contact.email}`}
                      className="text-gray-600 hover:text-primary transition"
                    >
                      {BUSINESS_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: {BUSINESS_INFO.hours.weekdays}</p>
                      <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="mt-8">
                <div className="rounded-lg overflow-hidden border">
                  <iframe
                    src={BUSINESS_INFO.maps.embed}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kashish Beauty Parlour Location"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={BUSINESS_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary transition group"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600 group-hover:text-white transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.017 0C8.396 0 7.917.016 6.656.09 5.393.164 4.542.416 3.767.79c-.77.378-1.424.912-2.084 1.578C.72 3.892.18 5.412.1 7.198c-.074 1.261-.09 1.74-.09 5.362 0 3.62.016 4.1.09 5.36.076 1.262.356 2.114.73 2.89.378.77.912 1.42 1.578 2.086.664.664 2.18 1.204 3.708 1.284 1.26.076 1.74.092 5.36.092 3.62 0 4.1-.016 5.36-.092 1.262-.076 2.114-.356 2.89-.73.77-.378 1.42-.912 2.086-1.578.664-.664 1.204-2.18 1.284-3.708.076-1.26.092-1.74.092-5.36 0-3.62-.016-4.1-.092-5.36-.076-1.262-.356-2.114-.73-2.89-.378-.77-.912-1.42-1.578-2.086C18.11.912 16.59.372 15.124.1 13.864.016 13.385 0 9.763 0H12.017zM8.9 2.04c3.51 0 3.bc.017 4.51.077 1.26.064 2.08.356 2.58.594.608.29 1.04.64 1.496 1.096.456.456.806.888 1.096 1.496.238.5.53 1.32.594 2.58.06 1.1.077 1.51.077 4.51s-.017 3.41-.077 4.51c-.064 1.26-.356 2.08-.594 2.58-.29.608-.64 1.04-1.096 1.496-.456.456-.888.806-1.496 1.096-.5.238-1.32.53-2.58.594-1.1.06-1.51.077-4.51.077s-3.41-.017-4.51-.077c-1.26-.064-2.08-.356-2.58-.594-.608-.29-1.04-.64-1.496-1.096C2.22 19.07 1.87 18.64 1.582 18.03c-.238-.5-.53-1.32-.594-2.58C.927 14.25.91 13.85.91 10.83s.017-3.41.077-4.51c.064-1.26.356-2.08.594-2.58.29-.608.64-1.04 1.096-1.496.456-.456.888-.806 1.496-1.096.5-.238 1.32-.53 2.58-.594C5.39.057 5.79.04 8.9.04zm7.03 2.04c-.728 0-1.32.592-1.32 1.32s.592 1.32 1.32 1.32 1.32-.592 1.32-1.32-.592-1.32-1.32-1.32zm3.86 3.86c-.144.144-.336.216-.536.216-.2 0-.392-.072-.536-.216-.288-.288-.288-.756 0-1.044.144-.144.336-.216.536-.216.2 0 .392.072.536.216.288.288.288.756 0 1.044z"/>
                    </svg>
                  </a>
                  <a
                    href={BUSINESS_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary transition group"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600 group-hover:text-white transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.justdial.com/Pune/Kashish-Beauty-Parlours-And-Training-Center-Near-Devika-Pure-Veg-Behind-Maharaja-Hotel-Thergaon/020PXX20-XX20-160108112320-V8L2_BZDET"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary transition group"
                    aria-label="JustDial"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600 group-hover:text-white transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="2"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
