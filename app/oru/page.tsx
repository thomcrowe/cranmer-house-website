import Link from "next/link"
import { ArrowLeft, ArrowRight, Flame, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cranmer House at ORU | Episcopal Campus Ministry",
  description:
    "An Episcopal campus ministry at Oral Roberts University. We read the Church Fathers, pray the Office, and follow the way of Christ together.",
}

export default function ORUPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-16 min-h-[80vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23faf9f7' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Flame className="w-6 h-6 text-stone-light" />
                <p className="text-stone-light text-sm tracking-[0.2em] uppercase">
                  Cranmer House at ORU
                </p>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-primary-foreground leading-tight mb-10">
                You Came Here With Faith. Go Deeper.
              </h1>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-8 h-14 text-base tracking-wide group"
              >
                <Link href="/calendar">
                  Find Next Meeting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="hidden lg:block">
              <blockquote className="border-l-2 border-stone pl-8">
                <p className="font-serif text-xl lg:text-2xl text-primary-foreground/90 italic leading-relaxed mb-6">
                  &ldquo;When the Spirit dwells in us, the Word who bestows the Spirit is in us
                  too, and the Father is present in the Word.&rdquo;
                </p>
                <cite className="text-primary-foreground/50 text-sm not-italic tracking-wide">
                  St. Athanasius of Alexandria
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile quote — only visible below lg */}
      <section className="lg:hidden py-16 bg-primary text-primary-foreground border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6">
          <blockquote className="border-l-2 border-stone pl-8">
            <p className="font-serif text-xl text-primary-foreground/90 italic leading-relaxed mb-4">
              &ldquo;When the Spirit dwells in us, the Word who bestows the Spirit is in us
              too, and the Father is present in the Word.&rdquo;
            </p>
            <cite className="text-primary-foreground/50 text-sm not-italic tracking-wide">
              St. Athanasius of Alexandria
            </cite>
          </blockquote>
        </div>
      </section>

      {/* About */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Who We Are</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-10">
            Ancient Faith for the Faithful Today
          </h2>
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              ORU is a place where faith is taken seriously. We complement that. Cranmer House
              is an Episcopal campus ministry rooted in the Anglican tradition, and we are at
              ORU because we believe the ancient faith of the Church has something profound to
              offer the faithful today.
            </p>
            <p>
              We take the Holy Spirit seriously, too. The Holy Spirit is the one who animates
              the Church, guards the tradition, and makes Christ present to us in Word and
              Sacrament.
            </p>
            <p>
              We meet together for prayer on the ORU campus, praying for one another, the
              school, our community, and our world. If you want to pray, read the Scriptures,
              and worship with others who take their faith seriously, you should join us.
              We're starting Cranmer House this year and would love for you to be a part of
              building it and helping shape what it becomes.
            </p>
          </div>
        </div>
      </section>

      {/* DTS */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-stone-light" />
                <p className="text-stone-light text-sm tracking-[0.2em] uppercase">
                  Dead Theologians Society
                </p>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-6">
                Read the Church Fathers With Us
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
                Cranmer House hosts the Dead Theologians Society, a reading group that meets
                every other Thursday at ORU and every other Thursday at TU. We read the Church
                Fathers slowly and seriously. Come find out what Sts. Athanasius, Augustine,
                and John Chrysostom have to say to you.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-8 h-14 text-base tracking-wide group"
              >
                <Link href="/dts">
                  Learn About DTS
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="hidden lg:block">
              <div className="border border-primary-foreground/10 p-10 space-y-6">
                <p className="text-stone-light text-xs tracking-[0.2em] uppercase">Every Other Thursday</p>
                <p className="font-serif text-3xl text-primary-foreground">7:00 PM</p>
                <p className="text-primary-foreground/60 leading-relaxed">
                  On ORU campus. Check the calendar for this week's location and reading.
                </p>
                <Link
                  href="/calendar"
                  className="inline-flex items-center gap-2 text-sm text-stone-light hover:text-primary-foreground transition-colors group"
                >
                  View Calendar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come Join Us */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">You're Welcome Here</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Come Join Us
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            No prerequisites, no quiz at the door. Just bring your faith and your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-14 text-base tracking-wide group"
            >
              <Link href="/calendar">
                Find Next Gathering
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border rounded-none px-8 h-14 text-base tracking-wide"
            >
              <Link href="/#contact">Contact Fr. Thom</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
