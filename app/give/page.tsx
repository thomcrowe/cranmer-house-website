import Link from "next/link"
import { ArrowLeft, ArrowRight, Heart, BookOpen, Users, Coffee } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Give | Cranmer House",
  description: "Support Cranmer House Episcopal campus ministry in Tulsa. Your gift funds ministry, books for students, hospitality, and retreats.",
}

const uses = [
  {
    icon: Users,
    title: "Ministry & Pastoral Care",
    description: "Fr. Thom gives his time to students freely, spiritual direction, pastoral conversations, and weekly gatherings. Your gift sustains that work.",
  },
  {
    icon: BookOpen,
    title: "Books for Students",
    description: "Every regular Cranmer House member receives a Book of Common Prayer. We also provide copies of whatever DTS is reading each semester.",
  },
  {
    icon: Coffee,
    title: "Hospitality & Food",
    description: "We feed people. Every gathering includes a meal or snacks, because good theological conversation happens best around a table.",
  },
  {
    icon: Heart,
    title: "Retreats & Formation",
    description: "Annual retreats and formation events shape students deeply. Scholarships ensure no one is priced out of a transformative weekend.",
  },
]

export default function GivePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-10 text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
          <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Support the Ministry</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 max-w-2xl">
            Support Cranmer House
          </h1>
          <div className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed mb-10 space-y-5">
            <p>
              Cranmer House is a ministry of Saint John's and is free and open to all students.
              If you want to share in spreading the ancient faith of the Church with students in
              Tulsa, we'd be grateful for your support.
            </p>
            <p>
              Your gift helps us cover the costs of ministry, Prayer Books and Bibles, materials,
              and making Cranmer House a place where anyone can come and encounter the living Christ.
            </p>
          </div>
          {/* Primary CTA right in the hero */}
          <a
            href="#"  // TODO: replace with St. John's online giving URL
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-base tracking-wide transition-colors group"
          >
            Give Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* What your gift does */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Your Gift Supports</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-14">
            What We Do With It
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {uses.map((item) => (
              <div key={item.title} className="bg-background p-8 lg:p-10 hover:bg-secondary transition-colors">
                <item.icon className="h-8 w-8 text-stone mb-5" />
                <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to give, two options */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Ways to Give</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-14">
            Two Ways to Support Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Online, Primary */}
            <div className="bg-primary text-primary-foreground p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-stone-light text-xs tracking-[0.2em] uppercase mb-4">Recommended</p>
                <h3 className="font-serif text-2xl text-primary-foreground mb-3">Give Online</h3>
                <p className="text-primary-foreground/70 leading-relaxed mb-8">
                  Give securely through St. John's Episcopal Church. In the notes,
                  designate your gift for <strong className="text-primary-foreground">&ldquo;Cranmer House.&rdquo;</strong>
                </p>
              </div>
              <a
                href="#"  // TODO: replace with St. John's online giving URL
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 text-sm tracking-wide transition-colors group self-start"
              >
                Give Online
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Check, Secondary */}
            <div className="bg-background border border-border p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-stone text-xs tracking-[0.2em] uppercase mb-4">By Mail</p>
                <h3 className="font-serif text-2xl text-foreground mb-3">Send a Check</h3>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  Make checks payable to <strong>St. John's Episcopal Church</strong> with
                  &ldquo;Cranmer House&rdquo; in the memo line.
                </p>
                <address className="not-italic text-sm text-foreground/50 font-mono leading-relaxed">
                  St. John's Episcopal Church<br />
                  4200 S. Atlanta Pl.<br />
                  Tulsa, OK 74105
                </address>
              </div>
            </div>
          </div>

          {/* Tax note */}
          <div className="mt-10 p-6 border border-border bg-background">
            <p className="text-stone text-xs tracking-[0.15em] uppercase mb-2">Tax Deductibility</p>
            <p className="text-foreground/60 leading-relaxed text-sm">
              Cranmer House operates under the 501(c)(3) umbrella of St. John's Episcopal Church, Tulsa.
              All gifts designated &ldquo;Cranmer House&rdquo; are tax-deductible. You will receive a
              year-end giving statement from St. John's.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <blockquote className="border-l-2 border-stone pl-8">
            <p className="font-serif text-2xl lg:text-3xl text-primary-foreground/90 italic leading-relaxed mb-6">
              &ldquo;Cranmer House is something we want to build and grow for Christ. I believe
              the ancient faith of the Church has so much to offer Tulsa's campuses, and I'd love
              for you to be a part of making that happen. Thank you for your generosity.&rdquo;
            </p>
            <cite className="text-primary-foreground/50 text-sm not-italic tracking-wide">
              Fr. Thom Crowe, Founder, Cranmer House
            </cite>
          </blockquote>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
