'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ManagementTenants() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How do I apply for a rental?',
      answer: 'You can apply online through our website. Complete the application, submit required documents, and pay the application fee. We typically respond within 48 hours.'
    },
    {
      question: 'What are the screening criteria?',
      answer: 'We review credit history, income (typically 3x monthly rent), rental history, employment verification, and conduct a background check.'
    },
    {
      question: 'How do I pay rent?',
      answer: 'Rent can be paid online through our tenant portal via ACH, debit card, or credit card. Automatic payments are also available for convenience.'
    },
    {
      question: 'How do I submit a maintenance request?',
      answer: 'Use our online portal to submit maintenance requests 24/7. For emergencies, call our emergency hotline for immediate assistance.'
    },
    {
      question: 'Can I have pets?',
      answer: 'Pet policies vary by property. Some properties allow pets with additional deposit and monthly pet rent. Check the specific property listing for details.'
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Tenant Information
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Everything you need to know about renting with GHR Management.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-12">
              How to Apply
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <div className="text-5xl font-bold text-brand-silver-light mb-4">01</div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Find Your Home</h3>
                <p className="text-brand-silver-dark">
                  Browse available properties and schedule a viewing.
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-brand-silver-light mb-4">02</div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Submit Application</h3>
                <p className="text-brand-silver-dark">
                  Complete the online application with required documents.
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-brand-silver-light mb-4">03</div>
                <h3 className="text-xl font-bold text-brand-black mb-3">Move In</h3>
                <p className="text-brand-silver-dark">
                  Once approved, sign the lease and move into your new home.
                </p>
              </div>
            </div>

            <div className="border-t-4 border-brand-black pt-12">
              <h3 className="text-3xl font-bold text-brand-black mb-6">Screening Criteria</h3>
              <div className="space-y-4 text-brand-silver-dark">
                <p>
                  <strong className="text-brand-black">Income:</strong> Verifiable monthly income of at least 3 times the monthly rent
                </p>
                <p>
                  <strong className="text-brand-black">Credit:</strong> Minimum credit score of 620 (exceptions may be considered with additional deposit)
                </p>
                <p>
                  <strong className="text-brand-black">Rental History:</strong> Positive references from previous landlords
                </p>
                <p>
                  <strong className="text-brand-black">Background:</strong> Clear criminal background check
                </p>
                <p>
                  <strong className="text-brand-black">Employment:</strong> Stable employment history or proof of income
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-8">
              Maintenance Requests
            </h2>
            <p className="text-xl text-brand-silver mb-12">
              We're committed to maintaining your home and responding quickly to any issues.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-brand-silver-light p-8">
                <h3 className="text-2xl font-bold text-brand-white mb-4">Regular Maintenance</h3>
                <p className="text-brand-silver mb-4">
                  For non-emergency issues, submit a request through your tenant portal. We'll respond within 24 hours and schedule repairs promptly.
                </p>
                <p className="text-brand-silver-dark text-sm">
                  Examples: Leaky faucet, broken appliance, cracked window
                </p>
              </div>
              <div className="border border-brand-silver-light p-8">
                <h3 className="text-2xl font-bold text-brand-white mb-4">Emergency Maintenance</h3>
                <p className="text-brand-silver mb-4">
                  For emergencies, call our 24/7 hotline at (732) 740-3742. We'll dispatch help immediately.
                </p>
                <p className="text-brand-silver-dark text-sm">
                  Examples: No heat in winter, flooding, gas leak, lockout
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-16 text-center">
            Tenant FAQ
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-brand-silver-light">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-brand-black">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-brand-black flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-black flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-brand-silver-dark leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-brand-silver mb-12 max-w-2xl mx-auto">
            Start your application online or contact us with any questions.
          </p>
          <button className="inline-block px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-silver-light transition-colors">
            Apply Online
          </button>
        </div>
      </section>
    </main>
  )
}
