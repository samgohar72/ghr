'use client'

import Link from 'next/link'

export default function EquitiesAbout() {
  return (
    <main className="min-h-screen">
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            About GHR Equities
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Strategic real estate investment with a focus on value creation.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8">
                Our Mission
              </h2>
            </div>
            <div className="space-y-6 text-lg text-brand-silver-dark leading-relaxed">
              <p>
                GHR Equities identifies and acquires undervalued commercial and multifamily properties with strong fundamentals and clear value-add opportunities.
              </p>
              <p>
                We combine operational expertise, market knowledge, and disciplined underwriting to generate superior risk-adjusted returns for our investors and partners.
              </p>
              <p>
                Our hands-on approach to asset management and commitment to long-term value creation sets us apart in the New Jersey real estate market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-16 text-center">
            Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <img
                src="https://placehold.co/300x300/D4D4D4/0A0A0A"
                alt="Sam Gohar"
                className="w-64 h-64 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-brand-white mb-2">Sam Gohar</h3>
              <p className="text-brand-silver mb-4">Founder & Managing Partner</p>
              <p className="text-brand-silver-dark leading-relaxed">
                With over 15 years of experience in real estate investment and development, Sam leads GHR Equities' acquisition strategy and portfolio management.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://placehold.co/300x300/D4D4D4/0A0A0A"
                alt="Principal"
                className="w-64 h-64 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-brand-white mb-2">Investment Team</h3>
              <p className="text-brand-silver mb-4">Acquisitions & Asset Management</p>
              <p className="text-brand-silver-dark leading-relaxed">
                Our team brings decades of combined experience in commercial real estate, finance, and property operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-brand-silver-dark mb-12 max-w-2xl mx-auto">
            We're always looking for quality investment opportunities and strategic partnerships.
          </p>
          <Link
            href="/equities/submit"
            className="inline-block px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
          >
            Submit a Deal
          </Link>
        </div>
      </section>
    </main>
  )
}
