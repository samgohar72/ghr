'use client'

export default function EquitiesCriteria() {
  return (
    <main className="min-h-screen">
      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6">
            Investment Criteria
          </h1>
          <p className="text-xl text-brand-silver max-w-3xl">
            What we look for in potential acquisitions.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-black mb-12">Asset Classes</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="border-l-4 border-brand-black pl-6">
                <h3 className="text-2xl font-bold text-brand-black mb-3">Multifamily</h3>
                <p className="text-brand-silver-dark">10+ units, Class B/C properties with upside potential</p>
              </div>
              <div className="border-l-4 border-brand-black pl-6">
                <h3 className="text-2xl font-bold text-brand-black mb-3">Retail</h3>
                <p className="text-brand-silver-dark">Anchored centers and strip malls in high-traffic areas</p>
              </div>
              <div className="border-l-4 border-brand-black pl-6">
                <h3 className="text-2xl font-bold text-brand-black mb-3">Mixed-Use</h3>
                <p className="text-brand-silver-dark">Residential/commercial combinations in urban cores</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-brand-black mb-8">Deal Parameters</h2>
            <div className="border border-brand-silver-light">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-brand-silver-light">
                    <td className="px-6 py-4 font-medium text-brand-black">Property Size</td>
                    <td className="px-6 py-4 text-brand-silver-dark">10–100 units (multifamily) / 10,000–50,000 SF (commercial)</td>
                  </tr>
                  <tr className="border-b border-brand-silver-light">
                    <td className="px-6 py-4 font-medium text-brand-black">Purchase Price</td>
                    <td className="px-6 py-4 text-brand-silver-dark">$1M – $15M</td>
                  </tr>
                  <tr className="border-b border-brand-silver-light">
                    <td className="px-6 py-4 font-medium text-brand-black">Location</td>
                    <td className="px-6 py-4 text-brand-silver-dark">New Jersey (Central & Northern regions preferred)</td>
                  </tr>
                  <tr className="border-b border-brand-silver-light">
                    <td className="px-6 py-4 font-medium text-brand-black">Occupancy</td>
                    <td className="px-6 py-4 text-brand-silver-dark">70%+ (will consider lower with strong plan)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-brand-black">Cap Rate</td>
                    <td className="px-6 py-4 text-brand-silver-dark">6%+ (depending on asset quality and location)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-brand-white mb-8">What We Look For</h2>
                <ul className="space-y-4 text-brand-silver">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-white flex-shrink-0"></span>
                    <span>Strong fundamentals with clear value-add opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-white flex-shrink-0"></span>
                    <span>Below-market rents with room for increases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-white flex-shrink-0"></span>
                    <span>Motivated sellers and off-market deals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-white flex-shrink-0"></span>
                    <span>Properties in emerging or stable markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-white flex-shrink-0"></span>
                    <span>Opportunities for operational improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-white flex-shrink-0"></span>
                    <span>Distressed assets with turnaround potential</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-brand-white mb-8">What We Pass On</h2>
                <ul className="space-y-4 text-brand-silver">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-silver flex-shrink-0"></span>
                    <span>Fully stabilized assets with limited upside</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-silver flex-shrink-0"></span>
                    <span>Properties requiring major structural work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-silver flex-shrink-0"></span>
                    <span>Locations in declining markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-silver flex-shrink-0"></span>
                    <span>Properties with significant environmental issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-silver flex-shrink-0"></span>
                    <span>Deals outside our geographic focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-silver flex-shrink-0"></span>
                    <span>Unrealistic seller expectations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
