'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pages/stockists', label: 'Stockists' },
  { href: '/pages/about', label: 'About' },
  { href: '/pages/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/Lid_Ladle_Logo_Text.png"
            alt="Lid & Ladle"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-brand-text hover:text-brand-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative text-brand-text hover:text-brand-primary transition-colors"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          <button
            className="md:hidden text-brand-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-brand-text hover:text-brand-primary transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
