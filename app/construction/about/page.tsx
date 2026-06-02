'use client'

export default function ConstructionAbout() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Building excellence since day one.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8">
                Our Story
              </h2>
            </div>
            <div className="space-y-6 text-lg text-brand-silver-dark leading-relaxed">
              <p>
                GHR Construction was founded on the principle that quality construction should be accessible, transparent, and executed with integrity. With over two decades of combined experience, our team has built a reputation for delivering exceptional results on every project.
              </p>
              <p>
                We serve residential and commercial clients throughout New Jersey, bringing expertise in new construction, renovations, and design-build services. Our commitment to craftsmanship, attention to detail, and client satisfaction sets us apart in the industry.
              </p>
              <p>
                From concept to completion, we work closely with our clients to ensure their vision becomes reality. Every project is an opportunity to demonstrate our dedication to excellence and build lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-16 text-center">
            Leadership
          </h2>
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <img
                src="/sam-gohar-photo.jpg"
                alt="Sam Gohar"
                className="w-full mb-6"
              />
              <h3 className="text-2xl font-bold text-brand-white mb-2">Sam Gohar</h3>
              <p className="text-brand-silver mb-4">Founder & President</p>
              <p className="text-brand-silver-dark leading-relaxed">
                With years of experience in residential and commercial construction, Sam leads GHR Construction with a focus on quality, integrity, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-16 text-center">
            Certifications & Credentials
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {['Licensed Contractor', 'Insured & Bonded', 'EPA Certified', 'OSHA Compliant'].map((cert, idx) => (
              <div key={idx} className="border border-brand-silver-light p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-brand-silver-light flex items-center justify-center">
                  <span className="text-brand-silver-dark font-bold text-sm">{cert.split(' ')[0]}</span>
                </div>
                <p className="text-sm text-brand-silver-dark font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}