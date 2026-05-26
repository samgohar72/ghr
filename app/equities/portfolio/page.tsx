'use client'

export default function EquitiesPortfolio() {
  const assets = [
    {
      name: 'Edison Garden Apartments',
      location: 'Edison, NJ',
      type: 'Multifamily',
      units: '48 units',
      acquired: '2021',
      status: 'Active',
    },
    {
      name: 'Main Street Retail Center',
      location: 'New Brunswick, NJ',
      type: 'Retail',
      units: '22,000 SF',
      acquired: '2020',
      status: 'Active',
    },
    {
      name: 'Woodbridge Plaza',
      location: 'Woodbridge, NJ',
      type: 'Mixed-Use',
      units: '32 units / 8,000 SF',
      acquired: '2022',
      status: 'Active',
    },
    {
      name: 'Highland Park Commons',
      location: 'Highland Park, NJ',
      type: 'Multifamily',
      units: '24 units',
      acquired: '2019',
      status: 'Exited',
    },
    {
      name: 'Perth Amboy Industrial',
      location: 'Perth Amboy, NJ',
      type: 'Industrial',
      units: '35,000 SF',
      acquired: '2023',
      status: 'Under Contract',
    },
    {
      name: 'Metuchen Flats',
      location: 'Metuchen, NJ',
      type: 'Multifamily',
      units: '36 units',
      acquired: '2021',
      status: 'Active',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-brand-black text-brand-white'
      case 'Exited':
        return 'bg-brand-silver text-brand-white'
      case 'Under Contract':
        return 'bg-brand-silver-dark text-brand-white'
      default:
        return 'bg-brand-silver-light text-brand-black'
    }
  }

  return (
    <main className="min-h-screen">
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            A selection of our current and past investments.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {assets.map((asset, idx) => (
              <div key={idx} className="border border-brand-silver-light hover:border-brand-black transition-colors">
                <img
                  src={`https://placehold.co/600x400/${idx % 2 === 0 ? '0A0A0A' : 'D4D4D4'}/${idx % 2 === 0 ? 'FFFFFF' : '0A0A0A'}`}
                  alt={asset.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-black mb-2">{asset.name}</h3>
                  <p className="text-brand-silver-dark mb-1">{asset.location}</p>
                  <p className="text-sm text-brand-silver-dark mb-4">{asset.type} • {asset.units}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-silver-dark">Acquired {asset.acquired}</span>
                    <span className={`px-3 py-1 text-xs font-medium ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
