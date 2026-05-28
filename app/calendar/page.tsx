import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { EventCalendar } from "@/components/event-calendar"
import { categoryColors, categoryLabels } from "@/lib/events"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Calendar | Cranmer House",
  description: "View upcoming events at Cranmer House An Episcopal Campus Ministry in Tulsa.",
}

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-10 text-sm tracking-wide group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
          <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Gatherings</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Event Calendar
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">
            Find gatherings at Oral Roberts University and the University of Tulsa. Filter by
            campus to see what's happening near you.
          </p>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <EventCalendar />
        </div>
      </section>

      {/* Category Legend */}
      <section className="py-12 lg:py-16 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Event Categories
          </p>
          <div className="flex flex-wrap gap-8">
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${categoryColors[cat]}`} />
                <span className="text-sm text-foreground/70">{categoryLabels[cat]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
