'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function ConstructionContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    timeline: '',
    description: '',
    hearAbout: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Form submission logic would go here
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
              We've received your inquiry and will be in touch within 1 business day.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-block px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Start Your Project
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Tell us about your project and we'll be in touch within 1 business day.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-brand-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
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

                {/* Email */}
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

                {/* Phone */}
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

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-brand-black mb-2">
                    Project Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  >
                    <option value="">Select a project type</option>
                    <option value="new-home">New Home Construction</option>
                    <option value="renovation">Home Renovation</option>
                    <option value="commercial">Commercial Build</option>
                    <option value="design-build">Design-Build</option>
                    <option value="addition">Addition or Expansion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Project Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-brand-black mb-2">
                    Project Location (City/Zip)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Edison, NJ or 08817"
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-brand-black mb-2">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  >
                    <option value="">Select a budget range</option>
                    <option value="under-50k">Under $50K</option>
                    <option value="50k-150k">$50K – $150K</option>
                    <option value="150k-500k">$150K – $500K</option>
                    <option value="500k-plus">$500K+</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-brand-black mb-2">
                    Estimated Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  >
                    <option value="">Select a timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="3-6-months">3–6 months</option>
                    <option value="6-12-months">6–12 months</option>
                    <option value="planning">Planning stage</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-brand-black mb-2">
                    Project Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your project, goals, and any specific details..."
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black resize-none"
                  />
                </div>

                {/* How did you hear about us */}
                <div>
                  <label htmlFor="hearAbout" className="block text-sm font-medium text-brand-black mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social Media</option>
                    <option value="drive-by">Drive-By</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="files" className="block text-sm font-medium text-brand-black mb-2">
                    Attach plans, sketches, or reference images (optional)
                  </label>
                  <input
                    type="file"
                    id="files"
                    name="files"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                  <p className="text-sm text-brand-silver-dark mt-2">
                    Accepts PDF, JPG, PNG files
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
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

              {/* What to Expect */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-brand-black mb-6">What to Expect</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-brand-silver-light mb-2">1</div>
                    <h4 className="font-bold text-brand-black mb-2">We Review Your Inquiry</h4>
                    <p className="text-brand-silver-dark text-sm">
                      Within 1 business day, we'll review your submission and assess the project scope.
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand-silver-light mb-2">2</div>
                    <h4 className="font-bold text-brand-black mb-2">We Schedule a Consultation</h4>
                    <p className="text-brand-silver-dark text-sm">
                      We'll arrange a free consultation to discuss your vision in detail.
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand-silver-light mb-2">3</div>
                    <h4 className="font-bold text-brand-black mb-2">We Deliver a Proposal</h4>
                    <p className="text-brand-silver-dark text-sm">
                      You'll receive a detailed proposal with timeline and pricing.
                    </p>
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
