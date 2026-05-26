'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ManagementOwners() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What are your management fees?',
      answer: 'Our fees vary based on property type and services required. We offer competitive rates and transparent pricing with no hidden costs. Contact us for a custom quote.'
    },
    {
      question: 'How do you screen tenants?',
      answer: 'We conduct comprehensive background checks including credit history, employment verification, rental history, and criminal background checks to ensure quality tenants.'
    },
    {
      question: 'When do I receive my rental income?',
      answer: 'Owner distributions are typically made by the 10th of each month, after rent is collected and any property expenses are deducted.'
    },
    {
      question: 'Can I still access my property?',
      answer: 'Yes, as the owner, you can access your property with reasonable notice to tenants. We coordinate access to ensure tenant rights are respected.'
    },
    {
      question: 'What happens if a tenant doesn\'t pay rent?',
      answer: 'We have strict enforcement procedures including late fees, notices, and eviction processes when necessary. We handle all legal proceedings on your behalf.'
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Property Owner Portal
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Everything you need to track and manage your investment properties.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-16 text-center">
            Portal Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="border-l-4 border-brand-black pl-8">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Real-Time Reporting</h3>
              <p className="text-brand-silver-dark leading-relaxed">
                Access up-to-date financial reports, occupancy status, and property performance metrics 24/7 through our secure owner portal.
              </p>
            </div>
            <div className="border-l-4 border-brand-black pl-8">
              <h3 className="text-2xl font-bold text-brand-black mb-4">24/7 Maintenance Tracking</h3>
              <p className="text-brand-silver-dark leading-relaxed">
                View all maintenance requests, work orders, and their status in real time. Complete transparency on property upkeep.
              </p>
            </div>
            <div className="border-l-4 border-brand-black pl-8">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Monthly Statements</h3>
              <p className="text-brand-silver-dark leading-relaxed">
                Detailed monthly financial statements showing income, expenses, and net cash flow for each property.
              </p>
            </div>
            <div className="border-l-4 border-brand-black pl-8">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Year-End Tax Docs</h3>
              <p className="text-brand-silver-dark leading-relaxed">
                Comprehensive year-end documentation for tax purposes, delivered in January for easy filing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-brand-silver-light">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brand-silver-dark hover:bg-opacity-10 transition-colors"
                >
                  <span className="text-lg font-bold text-brand-white">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-brand-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-white flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-brand-silver leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
