import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img
              src="/logo.svg"
              alt="Cranmer House"
              className="h-5 w-auto mb-1"
            />
            <p className="text-primary-foreground/60 text-sm mt-2">An Episcopal Campus Ministry in Tulsa</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/60">
            <Link href="/#about" className="hover:text-primary-foreground transition-colors">About</Link>
            <Link href="/dts" className="hover:text-primary-foreground transition-colors">DTS</Link>
            <Link href="/calendar" className="hover:text-primary-foreground transition-colors">Calendar</Link>
            <Link href="/resources" className="hover:text-primary-foreground transition-colors">Resources</Link>
            <Link href="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link>
            <Link href="/give" className="hover:text-primary-foreground transition-colors">Give</Link>
            <Link href="/#contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Cranmer House. A ministry of St. John&apos;s Episcopal Church, Tulsa.</p>
        </div>
      </div>
    </footer>
  )
}
