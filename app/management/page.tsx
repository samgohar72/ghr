'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'

export default function ManagementHome() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-black py-32 md:py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <img 
              src="https://customer-assets.emergentagent.com/job_ghr-multi-brand/artifacts/i6qc2usn_GHR%20MANAGEMENT.png"
              alt="GHR Management"
              className="w-64 md:w-80 mb-12"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
              Stress-Free Property Management.
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver mb-12">
              Professional property management services that maximize returns and minimize hassle.
            </p>
            <Link
              href="/management/contact"
              className="inline-block px-8 py-4 bg-brand-white text-brand-black font-medium border-2 border-brand-white hover:bg-brand-black hover:text-brand-white transition-colors"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="border-b-2 border-brand-black pb-8">
              <h3 className="text-2xl font-bold text-brand-black mb-3">Tenant Screening</h3>
              <p className="text-brand-silver-dark">Thorough background and credit checks for quality tenants.</p>
            </div>
            <div className="border-b-2 border-brand-black pb-8">
              <h3 className="text-2xl font-bold text-brand-black mb-3">Rent Collection</h3>
              <p className="text-brand-silver-dark">Reliable, on-time rent collection and accounting.</p>
            </div>
            <div className="border-b-2 border-brand-black pb-8">
              <h3 className="text-2xl font-bold text-brand-black mb-3">Maintenance Coordination</h3>
              <p className="text-brand-silver-dark">24/7 maintenance response and vendor management.</p>
            </div>
            <div className="border-b-2 border-brand-black pb-8">
              <h3 className="text-2xl font-bold text-brand-black mb-3">Financial Reporting</h3>
              <p className="text-brand-silver-dark">Detailed monthly statements and year-end tax documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-16 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-silver mb-6">01</div>
              <h3 className="text-2xl font-bold text-brand-white mb-4">Consultation</h3>
              <p className="text-brand-silver-dark">
                We assess your property and discuss your goals to create a customized management plan.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-silver mb-6">02</div>
              <h3 className="text-2xl font-bold text-brand-white mb-4">Onboarding</h3>
              <p className="text-brand-silver-dark">
                We handle tenant placement, lease agreements, and property documentation.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-silver mb-6">03</div>
              <h3 className="text-2xl font-bold text-brand-white mb-4">Management</h3>
              <p className="text-brand-silver-dark">
                Sit back while we manage daily operations, maintenance, and tenant relations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-16 text-center">
            What Owners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="border-l-4 border-brand-white pl-8">
              <p className="text-xl text-brand-white mb-6 leading-relaxed">
                "GHR Management has been exceptional. They keep our properties fully occupied and handle everything professionally. Couldn't ask for more."
              </p>
              <p className="text-brand-silver font-medium">— Property Owner, Edison</p>
            </div>
            <div className="border-l-4 border-brand-white pl-8">
              <p className="text-xl text-brand-white mb-6 leading-relaxed">
                "The financial reporting is transparent and detailed. I always know exactly how my properties are performing. Highly recommend."
              </p>
              <p className="text-brand-silver font-medium">— Multi-Unit Owner, New Brunswick</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Let us manage your property
          </h2>
          <p className="text-xl text-brand-silver-dark mb-12 max-w-2xl mx-auto">
            Focus on your investments while we handle the day-to-day operations.
          </p>
          <Link
            href="/management/contact"
            className="inline-block px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-silver-dark transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
