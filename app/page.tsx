'use client'

import Link from 'next/link'
import { ArrowRight, Building2, Home, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-brand-black">
        <div className="text-center px-4">
          <h1 className="text-[100px] md:text-[120px] font-bold text-brand-white mb-6">
            GHR Ventures
          </h1>
          <p className="text-2xl md:text-3xl text-brand-silver">
            Building. Managing. Growing.
          </p>
        </div>
      </section>

      {/* Three Company Cards */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* GHR Construction */}
            <Link href="/construction" className="group">
              <div className="border-t-4 border-brand-black p-8 md:p-12 hover:bg-gray-50 transition-colors">
                <Building2 className="w-12 h-12 text-brand-black mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  GHR Construction
                </h2>
                <p className="text-xl text-brand-silver-dark mb-8">
                  Residential & commercial construction. Home renovations.
                </p>
                <div className="flex items-center text-brand-black font-medium group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* GHR Management */}
            <Link href="/management" className="group">
              <div className="border-t-4 border-brand-black p-8 md:p-12 hover:bg-gray-50 transition-colors">
                <Home className="w-12 h-12 text-brand-black mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  GHR Management
                </h2>
                <p className="text-xl text-brand-silver-dark mb-8">
                  Full-service property management.
                </p>
                <div className="flex items-center text-brand-black font-medium group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* GHR Equities */}
            <Link href="/equities" className="group">
              <div className="border-t-4 border-brand-black p-8 md:p-12 hover:bg-gray-50 transition-colors">
                <TrendingUp className="w-12 h-12 text-brand-black mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  GHR Equities
                </h2>
                <p className="text-xl text-brand-silver-dark mb-8">
                  Real estate investment. Submit a deal.
                </p>
                <div className="flex items-center text-brand-black font-medium group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8">
              About GHR Ventures
            </h2>
            <p className="text-lg text-brand-silver-dark leading-relaxed">
              GHR Ventures is a diversified real estate and construction group committed to delivering exceptional results across multiple sectors. Through our three specialized divisions, we provide comprehensive solutions for building, managing, and investing in real estate. Our integrated approach allows us to serve clients at every stage of the property lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border-2 border-brand-white rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 bg-brand-white rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-bold text-brand-white mb-4">Integrity</h3>
              <p className="text-brand-silver-dark">
                We build lasting relationships through honest communication and ethical business practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border-2 border-brand-white rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 bg-brand-white rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-bold text-brand-white mb-4">Excellence</h3>
              <p className="text-brand-silver-dark">
                We pursue the highest standards in every project, from concept to completion.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border-2 border-brand-white rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 bg-brand-white rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-bold text-brand-white mb-4">Growth</h3>
              <p className="text-brand-silver-dark">
                We create value for our clients, partners, and communities through strategic innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}