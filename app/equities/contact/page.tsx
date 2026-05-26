'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function EquitiesContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'equities-contact',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.message || 'Something went wrong. Please try again.')
        return
      }

      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Failed to send your message. Please try again or contact us directly at sam@ghrgrp.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-brand-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 className="w-20 h-20 text-brand-black mx-auto mb-8" />
            <h1 className="text-5xl font-bold text-brand-black mb-6">Thank You!</h1>
            <p className="text-xl text-brand-silver-dark mb-8">
              We'll be in touch shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-block px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Get in touch with our investment team.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">
            <div className="md:col-span-2">
              <p className="text-brand-silver-dark mb-8">
                For deal submissions, please use our{' '}
                <Link href="/equities/submit" className="font-medium text-brand-black hover:underline">
                  Submit a Deal
                </Link>{' '}
                form.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-brand-black mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-black mb-2">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black resize-none"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 border border-red-300 bg-red-50 text-red-800 rounded-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <div className="border border-brand-silver-light p-8">
                <h3 className="text-2xl font-bold text-brand-black mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-brand-silver-dark mb-1">Phone</p>
                    <p className="text-lg text-brand-black">(732) 740-3742</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-silver-dark mb-1">Email</p>
                    <p className="text-lg text-brand-black">sam@ghrgrp.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
