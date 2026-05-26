'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function ManagementContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    units: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
              We'll contact you shortly to schedule your free consultation.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-block px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
            >
              Submit Another Request
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
            Schedule a Free Consultation
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Let's discuss how we can help you maximize your property investment.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">
            <div className="md:col-span-2">
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
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                </div>

                <div>
                  <label htmlFor="propertyAddress" className="block text-sm font-medium text-brand-black mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                </div>

                <div>
                  <label htmlFor="units" className="block text-sm font-medium text-brand-black mb-2">
                    Number of Units
                  </label>
                  <input
                    type="number"
                    id="units"
                    name="units"
                    value={formData.units}
                    onChange={handleChange}
                    placeholder="e.g., 1, 4, 12"
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
                    placeholder="Tell us about your property and management needs..."
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
                >
                  Submit Request
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
