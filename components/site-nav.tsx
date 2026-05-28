'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo, static SVG image */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Cranmer House"
              className="h-6 lg:h-7 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              About
            </Link>
            <Link href="/dts" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              DTS
            </Link>
            <Link href="/calendar" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              Events
            </Link>
            <Link href="/#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              Contact
            </Link>
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/give">
              <Button size="sm" variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/15 rounded-none px-5 text-sm tracking-wide">
                Give
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-6 text-sm tracking-wide">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="flex flex-col py-6 px-6">
            <Link href="/#about" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/dts" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              DTS
            </Link>
            <Link href="/calendar" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Events
            </Link>
            <Link href="/resources" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
            <Link href="/faq" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <Link href="/give" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Give
            </Link>
            <Link href="/#contact" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Button
              asChild
              className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/#contact">Join Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
