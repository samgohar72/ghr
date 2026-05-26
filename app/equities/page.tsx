'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function EquitiesHome() {
  return (
    <main className="min-h-screen">
      <section className="bg-brand-black py-32 md:py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <img 
              src="https://customer-assets.emergentagent.com/job_ghr-multi-brand/artifacts/580vcyar_GHR%20EQ.png"
              alt="GHR Equities"
              className="w-64 md:w-80 mb-12"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
              Strategic Real Estate
              <br />
              Investment.
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver mb-12">
              Acquiring and optimizing commercial and multi-family properties throughout New Jersey.
            </p>
            <Link
              href="/equities/submit"
              className="inline-block px-8 py-4 bg-transparent text-brand-white font-medium border-2 border-brand-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              Submit a Deal →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-16 text-center">
            Investment Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border border-brand-silver-light p-8">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Multifamily</h3>
              <p className="text-brand-silver-dark">
                Apartment buildings and residential properties with strong cash flow potential and value-add opportunities.
              </p>
            </div>
            <div className="border border-brand-silver-light p-8">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Commercial</h3>
              <p className="text-brand-silver-dark">
                Retail, office, and mixed-use properties in high-traffic locations with stable tenant bases.
              </p>
            </div>
            <div className="border border-brand-silver-light p-8">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Value-Add</h3>
              <p className="text-brand-silver-dark">
                Underperforming properties where operational improvements can drive significant returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-16 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-silver mb-6">01</div>
              <h3 className="text-xl font-bold text-brand-white mb-3">Source</h3>
              <p className="text-brand-silver-dark">
                Identify off-market and on-market opportunities through our network.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-silver mb-6">02</div>
              <h3 className="text-xl font-bold text-brand-white mb-3">Underwrite</h3>
              <p className="text-brand-silver-dark">
                Rigorous financial analysis and due diligence on every deal.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-silver mb-6">03</div>
              <h3 className="text-xl font-bold text-brand-white mb-3">Acquire</h3>
              <p className="text-brand-silver-dark">
                Execute acquisitions quickly with experienced deal execution.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-silver mb-6">04</div>
              <h3 className="text-xl font-bold text-brand-white mb-3">Optimize</h3>
              <p className="text-brand-silver-dark">
                Implement operational improvements to maximize value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
            Have a deal worth looking at?
          </h2>
          <p className="text-xl text-brand-silver mb-12 max-w-2xl mx-auto">
            We review all submissions confidentially and respond within 48 hours.
          </p>
          <Link
            href="/equities/submit"
            className="inline-block px-8 py-4 bg-transparent text-brand-white font-medium border-2 border-brand-white hover:bg-brand-white hover:text-brand-black transition-colors"
          >
            Submit a Deal
          </Link>
        </div>
      </section>
    </main>
  )
}
