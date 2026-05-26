'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ConstructionHome() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-black py-32 md:py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
              Built to Last.
              <br />
              Crafted with Care.
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver mb-12">
              Quality construction services for residential and commercial projects throughout New Jersey.
            </p>
            <Link
              href="/construction/contact"
              className="inline-block px-8 py-4 bg-brand-white text-brand-black font-medium border-2 border-brand-white hover:bg-brand-black hover:text-brand-white transition-colors"
            >
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="border-b-2 border-brand-black pb-8">
              <h3 className="text-2xl font-bold text-brand-black mb-3">New Home Construction</h3>
              <p className="text-brand-silver-dark">Custom homes built to your specifications and lifestyle.</p>
            </div>
            <div className="border-b-2 border-brand-black pb-8">
              <h3 className="text-2xl font-bold text-brand-black mb-3">Commercial Builds</h3>
              <p className="text-brand-silver-dark">Professional commercial construction from ground up.</p>
            </div>
            <div className="border-b-2 border-brand-black pb-8">
              <h3 className="text-2xl font-bold text-brand-black mb-3">Home Renovations</h3>
              <p className="text-brand-silver-dark">Transform existing spaces with expert remodeling.</p>
            </div>
            <div className="border-b-2 border-brand-black pb-8">
              <h3 className="text-2xl font-bold text-brand-black mb-3">Design-Build</h3>
              <p className="text-brand-silver-dark">Integrated design and construction services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why GHR Construction */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-16 text-center">
            Why GHR Construction
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 text-brand-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-brand-white mb-4">Licensed & Insured</h3>
              <p className="text-brand-silver">
                Fully licensed contractors with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 text-brand-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-brand-white mb-4">20+ Years Combined Experience</h3>
              <p className="text-brand-silver">
                Decades of expertise in residential and commercial construction projects.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 text-brand-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-brand-white mb-4">On-Time Delivery</h3>
              <p className="text-brand-silver">
                Committed to meeting deadlines and delivering projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-16 text-center">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {[
              { name: 'Modern Family Home', location: 'Edison, NJ', type: 'Residential' },
              { name: 'Office Complex', location: 'New Brunswick, NJ', type: 'Commercial' },
              { name: 'Kitchen Renovation', location: 'Woodbridge, NJ', type: 'Renovation' },
            ].map((project, idx) => (
              <div key={idx} className="border border-brand-silver-light">
                <img
                  src={`https://placehold.co/800x500/0A0A0A/FFFFFF`}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">{project.name}</h3>
                  <p className="text-brand-silver-dark mb-2">{project.location}</p>
                  <span className="inline-block px-3 py-1 border border-brand-silver-light text-brand-silver-dark text-sm">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/construction/projects"
              className="inline-flex items-center text-brand-black font-medium hover:text-brand-silver-dark transition-colors"
            >
              <span className="mr-2">View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-brand-silver mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and create something exceptional together.
          </p>
          <Link
            href="/construction/contact"
            className="inline-block px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-black hover:text-brand-white border-2 border-brand-white transition-colors"
          >
            Submit an Inquiry
          </Link>
        </div>
      </section>
    </main>
  )
}