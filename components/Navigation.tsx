'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isConstruction = pathname?.startsWith('/construction')
  const isManagement = pathname?.startsWith('/management')
  const isEquities = pathname?.startsWith('/equities')

  const getNavLinks = () => {
    if (isConstruction) {
      return [
        { href: '/construction', label: 'Home' },
        { href: '/construction/services', label: 'Services' },
        { href: '/construction/about', label: 'About' },
        { href: '/construction/contact', label: 'Contact & Inquiries' },
      ]
    }
    if (isManagement) {
      return [
        { href: '/management', label: 'Home' },
        { href: '/management/services', label: 'Services' },
        { href: '/management/owners', label: 'Owners' },
        { href: '/management/tenants', label: 'Tenants' },
        { href: '/management/contact', label: 'Contact' },
      ]
    }
    if (isEquities) {
      return [
        { href: '/equities', label: 'Home' },
        { href: '/equities/criteria', label: 'Criteria' },
        { href: '/equities/submit', label: 'Submit a Deal' },
        { href: '/equities/contact', label: 'Contact' },
      ]
    }
    return []
  }

  const navLinks = getNavLinks()

  return (
    <>
      <nav className="sticky top-0 z-50 bg-brand-black border-b border-brand-silver-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-brand-white font-bold text-xl">
              {isConstruction || isManagement || isEquities ? '← GHR' : 'GHR Ventures'}
            </Link>
            
            {navLinks.length > 0 && (
              <>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? 'text-brand-white'
                          : 'text-brand-silver hover:text-brand-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-brand-white"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && navLinks.length > 0 && (
        <div className="fixed inset-0 z-40 bg-brand-black md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-brand-white'
                    : 'text-brand-silver hover:text-brand-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}