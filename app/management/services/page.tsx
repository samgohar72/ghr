'use client'

export default function ManagementServices() {
  const tiers = ['Basic', 'Standard', 'Premium']

  const services = [
    {
      title: 'Residential Management',
      description: 'Complete property management for single-family homes, condos, and small multi-family properties. We handle everything from tenant placement to ongoing maintenance.',
      features: [
        'Tenant screening and placement',
        'Lease preparation and renewal',
        'Rent collection and accounting',
        'Property inspections',
        'Maintenance coordination',
        '24/7 tenant support',
      ],
    },
    {
      title: 'Commercial Management',
      description: 'Professional management services for retail spaces, office buildings, and mixed-use properties. Maximize occupancy and property value.',
      features: [
        'Tenant acquisition and retention',
        'Commercial lease administration',
        'CAM reconciliation',
        'Vendor and contractor management',
        'Property compliance',
        'Financial analysis and reporting',
      ],
    },
    {
      title: 'Short-Term / Vacation Rental',
      description: 'Specialized management for short-term and vacation rental properties. Optimize bookings, pricing, and guest experiences.',
      features: [
        'Listing optimization',
        'Dynamic pricing strategy',
        'Guest communication',
        'Turnover and cleaning coordination',
        'Review management',
        'Revenue reporting',
      ],
    },
    {
      title: 'HOA Management',
      description: 'Comprehensive homeowners association management services for residential communities, condominiums, and mixed-use developments.',
      features: [
        'Board meeting coordination',
        'Budget preparation and management',
        'Violation tracking and enforcement',
        'Vendor management',
        'Community communication',
        'Financial reporting',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Management Services
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Tailored property management solutions for every type of investment.
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
            <div className="max-w-5xl mx-auto">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                idx % 2 === 0 ? 'text-brand-black' : 'text-brand-white'
              }`}>
                {service.title}
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${
                idx % 2 === 0 ? 'text-brand-silver-dark' : 'text-brand-silver'
              }`}>
                {service.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-2 h-2 mr-3 ${
                      idx % 2 === 0 ? 'bg-brand-black' : 'bg-brand-white'
                    }`}></div>
                    <span className={idx % 2 === 0 ? 'text-brand-black' : 'text-brand-white'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              {/* Service Tiers */}
              <div className="mt-12">
                <p className={`text-sm font-medium mb-4 ${
                  idx % 2 === 0 ? 'text-brand-silver-dark' : 'text-brand-silver'
                }`}>
                  Available in:
                </p>
                <div className="flex gap-3">
                  {tiers.map((tier) => (
                    <span
                      key={tier}
                      className={`px-4 py-2 border text-sm font-medium ${
                        idx % 2 === 0
                          ? 'border-brand-silver-light text-brand-black'
                          : 'border-brand-silver text-brand-white'
                      }`}
                    >
                      {tier}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
