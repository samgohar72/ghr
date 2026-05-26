'use client'

export default function ConstructionContact() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Get in touch to discuss your construction project.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-brand-white py-32 md:py-48">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="border-l-4 border-brand-black pl-8">
                <h2 className="text-sm font-medium text-brand-silver-dark mb-2">Phone</h2>
                <a 
                  href="tel:7327403742" 
                  className="text-3xl md:text-4xl font-bold text-brand-black hover:text-brand-silver-dark transition-colors whitespace-nowrap"
                >
                  (732) 740-3742
                </a>
              </div>
              <div className="border-l-4 border-brand-black pl-8">
                <h2 className="text-sm font-medium text-brand-silver-dark mb-2">Email</h2>
                <a 
                  href="mailto:sam@ghrgrp.com" 
                  className="text-3xl md:text-4xl font-bold text-brand-black hover:text-brand-silver-dark transition-colors whitespace-nowrap"
                >
                  sam@ghrgrp.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
