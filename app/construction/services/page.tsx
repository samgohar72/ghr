'use client'

import { CheckCircle2 } from 'lucide-react'

export default function ConstructionServices() {
  const services = [
    {
      number: '01',
      title: 'Residential Construction',
      description: 'We specialize in building custom homes that reflect your unique lifestyle and preferences. From initial concept through final walkthrough, our team manages every detail of your residential construction project.',
      offerings: [
        'Custom new home construction',
        'Single-family and multi-family homes',
        'Foundation to finish carpentry',
        'Energy-efficient building practices',
        'Quality materials and craftsmanship',
      ],
    },
    {
      number: '02',
      title: 'Commercial Construction',
      description: 'Our commercial construction services deliver functional, attractive spaces for businesses of all sizes. We understand the importance of timelines and budgets in commercial projects.',
      offerings: [
        'Office buildings and retail spaces',
        'Multi-tenant commercial properties',
        'Tenant improvements',
        'Ground-up construction',
        'ADA compliance and code requirements',
      ],
    },
    {
      number: '03',
      title: 'Renovations & Remodeling',
      description: 'Transform your existing space with our comprehensive renovation services. Whether it\'s a single room or a whole-house remodel, we bring fresh life to your property.',
      offerings: [
        'Kitchen and bathroom remodels',
        'Basement finishing',
        'Room additions',
        'Interior and exterior updates',
        'Structural modifications',
      ],
    },
    {
      number: '04',
      title: 'Design-Build Projects',
      description: 'Streamline your construction project with our integrated design-build approach. One team, one contract, seamless execution from concept to completion.',
      offerings: [
        'Collaborative design process',
        'Value engineering',
        'Single point of accountability',
        'Faster project delivery',
        'Cost transparency',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6 max-w-4xl">
            Our Services
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Comprehensive construction solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, idx) => (
        <section
          key={idx}
          className={`py-20 md:py-32 ${idx % 2 === 0 ? 'bg-brand-white' : 'bg-brand-black'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <div className="text-8xl font-bold text-brand-silver-light mb-6">
                      {service.number}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-brand-silver-dark mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.offerings.map((offering, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-brand-black mt-1 mr-3 flex-shrink-0" />
                          <span className="text-brand-black">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://placehold.co/700x450/D4D4D4/0A0A0A"
                      alt={service.title}
                      className="w-full"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="order-2 md:order-1">
                    <img
                      src="https://placehold.co/700x450/D4D4D4/0A0A0A"
                      alt={service.title}
                      className="w-full"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="text-8xl font-bold text-brand-silver mb-6">
                      {service.number}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-brand-silver mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.offerings.map((offering, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-brand-white mt-1 mr-3 flex-shrink-0" />
                          <span className="text-brand-white">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}