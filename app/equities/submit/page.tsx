'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function EquitiesSubmit() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    propertyAddress: '',
    assetType: '',
    units: '',
    yearBuilt: '',
    occupancy: '',
    askingPrice: '',
    noi: '',
    capRate: '',
    loanInPlace: '',
    description: '',
    confirm: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-brand-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 className="w-20 h-20 text-brand-black mx-auto mb-8" />
            <h1 className="text-5xl font-bold text-brand-black mb-6">Deal Submitted</h1>
            <p className="text-xl text-brand-silver-dark mb-8">
              Thank you for submitting this opportunity. Our team will review it and respond within 48 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-block px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
            >
              Submit Another Deal
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
            Submit a Deal
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Have an investment opportunity? Share the details and we'll respond within 48 hours.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="border-t-4 border-brand-black pt-8">
                <h2 className="text-3xl font-bold text-brand-black mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
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
                    <label htmlFor="company" className="block text-sm font-medium text-brand-black mb-2">
                      Company/Brokerage (optional)
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
                </div>
              </div>

              {/* Property Details */}
              <div className="border-t-4 border-brand-black pt-8">
                <h2 className="text-3xl font-bold text-brand-black mb-6">Property Details</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="propertyAddress" className="block text-sm font-medium text-brand-black mb-2">
                      Property Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      required
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      placeholder="Full street address, city, state, zip"
                      className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="assetType" className="block text-sm font-medium text-brand-black mb-2">
                        Asset Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="assetType"
                        name="assetType"
                        required
                        value={formData.assetType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                      >
                        <option value="">Select asset type</option>
                        <option value="multifamily">Multifamily</option>
                        <option value="retail">Retail</option>
                        <option value="office">Office</option>
                        <option value="mixed-use">Mixed-Use</option>
                        <option value="industrial">Industrial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="units" className="block text-sm font-medium text-brand-black mb-2">
                        Number of Units/SF
                      </label>
                      <input
                        type="text"
                        id="units"
                        name="units"
                        value={formData.units}
                        onChange={handleChange}
                        placeholder="e.g., 24 units or 15,000 SF"
                        className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="yearBuilt" className="block text-sm font-medium text-brand-black mb-2">
                        Year Built
                      </label>
                      <input
                        type="text"
                        id="yearBuilt"
                        name="yearBuilt"
                        value={formData.yearBuilt}
                        onChange={handleChange}
                        placeholder="e.g., 1985"
                        className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="occupancy" className="block text-sm font-medium text-brand-black mb-2">
                        Occupancy %
                      </label>
                      <input
                        type="text"
                        id="occupancy"
                        name="occupancy"
                        value={formData.occupancy}
                        onChange={handleChange}
                        placeholder="e.g., 85%"
                        className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div className="border-t-4 border-brand-black pt-8">
                <h2 className="text-3xl font-bold text-brand-black mb-6">Financial Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="askingPrice" className="block text-sm font-medium text-brand-black mb-2">
                      Asking Price <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="askingPrice"
                      name="askingPrice"
                      required
                      value={formData.askingPrice}
                      onChange={handleChange}
                      placeholder="e.g., $2,500,000"
                      className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="noi" className="block text-sm font-medium text-brand-black mb-2">
                      Current NOI (optional)
                    </label>
                    <input
                      type="text"
                      id="noi"
                      name="noi"
                      value={formData.noi}
                      onChange={handleChange}
                      placeholder="e.g., $180,000"
                      className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="capRate" className="block text-sm font-medium text-brand-black mb-2">
                      Cap Rate (optional)
                    </label>
                    <input
                      type="text"
                      id="capRate"
                      name="capRate"
                      value={formData.capRate}
                      onChange={handleChange}
                      placeholder="e.g., 7.2%"
                      className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="loanInPlace" className="block text-sm font-medium text-brand-black mb-2">
                      Loan in Place?
                    </label>
                    <select
                      id="loanInPlace"
                      name="loanInPlace"
                      value={formData.loanInPlace}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Deal Description */}
              <div className="border-t-4 border-brand-black pt-8">
                <h2 className="text-3xl font-bold text-brand-black mb-6">Deal Description</h2>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-brand-black mb-2">
                    Deal Summary <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the opportunity, property condition, value-add potential, and any other relevant details..."
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black resize-none"
                  />
                </div>

                <div className="mt-6">
                  <label htmlFor="files" className="block text-sm font-medium text-brand-black mb-2">
                    Offering Memorandum / Marketing Materials (optional)
                  </label>
                  <input
                    type="file"
                    id="files"
                    name="files"
                    multiple
                    accept=".pdf,.xlsx,.xls,.doc,.docx"
                    className="w-full px-4 py-3 border border-brand-silver-light text-brand-black focus:outline-none focus:border-brand-black"
                  />
                  <p className="text-sm text-brand-silver-dark mt-2">
                    Accepts PDF, Excel, Word documents
                  </p>
                </div>
              </div>

              {/* Confirmation */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirm"
                  name="confirm"
                  required
                  checked={formData.confirm}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                />
                <label htmlFor="confirm" className="text-sm text-brand-black">
                  I confirm this is a legitimate investment opportunity and I have authority to submit this deal.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
              >
                Submit Deal
              </button>
            </form>

            {/* What Happens Next */}
            <div className="mt-16 border-t-4 border-brand-black pt-12">
              <h2 className="text-3xl font-bold text-brand-black mb-8">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-brand-silver-light mb-4">1</div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">Initial Review</h3>
                  <p className="text-brand-silver-dark">
                    Our team reviews your submission within 48 hours and evaluates fit with our criteria.
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-silver-light mb-4">2</div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">Preliminary Analysis</h3>
                  <p className="text-brand-silver-dark">
                    If interested, we'll request additional information and conduct initial underwriting.
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-silver-light mb-4">3</div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">LOI or Pass</h3>
                  <p className="text-brand-silver-dark">
                    We'll either submit a Letter of Intent or provide feedback on why we're passing.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 border border-brand-silver-light">
                <p className="text-sm text-brand-silver-dark">
                  <strong className="text-brand-black">Confidentiality:</strong> All submissions are treated with strict confidentiality. We do not share deal information with third parties without explicit permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
