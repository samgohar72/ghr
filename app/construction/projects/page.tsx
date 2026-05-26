'use client'

import { useState } from 'react'

export default function ConstructionProjects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Residential', 'Commercial', 'Renovation']

  const projects = [
    { name: 'Modern Family Home', location: 'Edison, NJ', type: 'Residential', image: 'https://placehold.co/600x400/0A0A0A/FFFFFF' },
    { name: 'Office Complex', location: 'New Brunswick, NJ', type: 'Commercial', image: 'https://placehold.co/600x400/D4D4D4/0A0A0A' },
    { name: 'Kitchen Renovation', location: 'Woodbridge, NJ', type: 'Renovation', image: 'https://placehold.co/600x400/0A0A0A/FFFFFF' },
    { name: 'Retail Building', location: 'Perth Amboy, NJ', type: 'Commercial', image: 'https://placehold.co/600x400/D4D4D4/0A0A0A' },
    { name: 'Luxury Residence', location: 'Metuchen, NJ', type: 'Residential', image: 'https://placehold.co/600x400/0A0A0A/FFFFFF' },
    { name: 'Basement Finish', location: 'Carteret, NJ', type: 'Renovation', image: 'https://placehold.co/600x400/D4D4D4/0A0A0A' },
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.type === activeFilter)

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            Explore our portfolio of completed residential and commercial construction projects.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-brand-white border-b border-brand-silver-light">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-lg font-medium pb-2 transition-colors ${
                  activeFilter === filter
                    ? 'text-brand-black border-b-2 border-brand-black'
                    : 'text-brand-silver-dark hover:text-brand-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-brand-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="border border-brand-silver-light hover:border-brand-black transition-colors cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">{project.name}</h3>
                  <p className="text-brand-silver-dark mb-3">{project.location}</p>
                  <span className="inline-block px-3 py-1 border border-brand-silver-light text-brand-silver-dark text-sm">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}