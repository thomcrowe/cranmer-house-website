import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Users, Calendar, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqAccordion } from "@/components/faq-accordion"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { generatedDtsReading } from "@/lib/dts-reading-generated"
import { generatedPastReadings } from "@/lib/past-readings-generated"

export const metadata = {
  title: "Dead Theologians Society | Cranmer House",
  description:
    "Weekly theological reading and discussion for people at ORU and TU. No expertise required, just curiosity, good conversation, and usually some food.",
}

const dtsReading = generatedDtsReading
const pastReadings = generatedPastReadings

const faqs = [
  {
    q: "Do I need to do the reading beforehand?",
    a: "It helps, but it's not required. We always summarize what we've read before discussing. If you couldn't get to it, come anyway.",
  },
  {
    q: "Is there a cost?",
    a: "No. DTS is completely free. We often have food, and we provide copies of whatever we're reading.",
  },
  {
    q: "I'm not Episcopal. Can I still come?",
    a: "Absolutely. DTS draws people from all kinds of backgrounds: Baptist, Catholic, non-denominational, skeptic, and everything in between.",
  },
  {
    q: "What if I've never read theology before?",
    a: "Perfect. DTS is designed to be accessible. We read together, discuss together, and figure it out together. No prior expertise needed.",
  },
  {
    q: "How do I get the books?",
    a: "We provide copies of whatever we're reading, or we'll point you to free online versions. Many classics are available free on Project Gutenberg or CCEL.",
  },
]

export default function DTSPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-16 min-h-[70vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
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
                  Weekly Gathering
                </p>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
                Dead Theologians Society
              </h1>
              <p className="text-primary-foreground/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
                Every week, we gather to read the great voices of Christian history. No expertise
                required. Just curiosity, good conversation, and usually some food.
              </p>
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

            <div className="hidden lg:flex justify-end">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 border border-primary-foreground/10 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-stone/30" />
                </div>
                {/* Floating quote */}
                <div className="absolute -bottom-6 -left-10 bg-stone/90 text-white p-6 max-w-[260px]">
                  <p className="font-serif text-sm italic leading-snug mb-3">
                    &ldquo;It is a good rule, after reading a new book, never to allow yourself another new one till you have read an old one in between.&rdquo;
                  </p>
                  <p className="font-serif text-xs italic text-white/70">
                    C.S. Lewis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DTS */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">About</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-8">
                What is the Dead Theologians Society?
              </h2>
              <div className="space-y-5 text-foreground/70 text-lg leading-relaxed">
                <p>
                  At Dead Theologians Society, we come together to read and seriously engage with
                  the great thinkers of the Christian tradition. We read slowly, we discuss,
                  sometimes argue (respectfully), and we take seriously the idea that people who
                  lived centuries ago still have something to say to us today.
                </p>
                <p>
                  Each semester we work through a classic text together, Augustine's
                  Confessions, Athanasius' On the Incarnation, Julian of Norwich's
                  Revelations, and more. We read a chapter each week, then gather to discuss.
                </p>
                <p>
                  DTS is often the first place people encounter Cranmer House. It's low
                  commitment, intellectually stimulating, and deeply formative.
                </p>
              </div>
            </div>

            <div className="space-y-px">
              <div className="bg-secondary border border-border p-8">
                <h3 className="font-serif text-xl text-foreground mb-1 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-stone shrink-0" />
                  When We Meet
                </h3>
                <p className="font-serif text-3xl text-foreground mt-4 mb-2">Thursdays at 7:00 PM</p>
                <p className="text-foreground/60 leading-relaxed">
                  We rotate between Oral Roberts University and the University of Tulsa, with
                  occasional gatherings at St. John's Episcopal Church.
                </p>
              </div>

              <div className="bg-secondary border border-border p-8">
                <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-3">
                  <Users className="w-5 h-5 text-stone shrink-0" />
                  Who Can Come
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  Join us. No theological prerequisites. Nobody will quiz you at the door.
                  Just come and join the conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Reading, stone/warm accent band */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Currently Reading</p>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">{dtsReading.title}</h2>
            <p className="text-primary-foreground/60 text-lg mt-3">by {dtsReading.author}</p>
          </div>

          {(dtsReading.current_chapters || dtsReading.next_chapters) && (
            <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10 mb-14">
              {dtsReading.current_chapters && (
                <div className="bg-primary p-8">
                  <p className="text-stone-light text-sm tracking-wide mb-3">This Week</p>
                  <p className="font-serif text-xl text-primary-foreground">{dtsReading.current_chapters}</p>
                </div>
              )}
              {dtsReading.next_chapters && (
                <div className="bg-primary p-8">
                  <p className="text-stone-light text-sm tracking-wide mb-3">Next Week</p>
                  <p className="font-serif text-xl text-primary-foreground">{dtsReading.next_chapters}</p>
                </div>
              )}
            </div>
          )}

          {dtsReading.quote && (
            <blockquote className="border-l-2 border-stone pl-8 max-w-3xl">
              <p className="font-serif text-2xl lg:text-3xl text-primary-foreground/90 italic leading-relaxed mb-6">
                &ldquo;{dtsReading.quote}&rdquo;
              </p>
              {dtsReading.quote_attribution && (
                <cite className="text-primary-foreground/50 text-sm not-italic tracking-wide">
                  {dtsReading.quote_attribution}
                </cite>
              )}
            </blockquote>
          )}
        </div>
      </section>

      {/* Past Readings */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Previous Semesters</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-14">
            Voices We've Explored
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {pastReadings.map((reading, i) => (
              <div key={i} className="bg-background p-8 hover:bg-secondary transition-colors group">
                <p className="text-stone text-xs font-mono mb-3 tracking-wide">{reading.period}</p>
                <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-stone transition-colors">
                  {reading.work}
                </h3>
                <p className="text-muted-foreground text-sm">{reading.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Meet */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">On Both Campuses</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-10">
            Where We Meet
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            DTS meets every other Thursday at ORU and every other Thursday at TU. Both campuses
            are praying the same prayers, reading the same works, and deepening their faith
            together. Some grew up in other Christian traditions. Some didn't grow up in church
            at all. Turns out St. Athanasius doesn't care. What he said to his flock 1,500 years
            ago still resonates.
          </p>
        </div>
      </section>

      {/* Why Read the Fathers */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Our Conviction</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-10">
            Why Read the Church Fathers?
          </h2>
          <p className="font-serif text-2xl lg:text-3xl text-foreground italic leading-tight mb-10">
            We live in an age of spiritual amnesia.
          </p>
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              Most Christians today have never heard of Augustine, Athanasius, or the great cloud
              of witnesses who shaped our faith. We've lost touch with our own history.
            </p>
            <p>
              The Dead Theologians Society exists to reconnect us with that history, not because the
              past is perfect, but because we need more than just our own generation's wisdom to
              navigate the challenges of faith.
            </p>
            <p>
              Your questions aren't new. Anxiety about suffering, doubting God's existence, the
              struggle to live rightly in a complicated world. St. Augustine wrestled with this. So
              did Sts. Athanasius, John Chrysostom, and the Desert Fathers. They didn't always have
              easy answers, but in their writings you find honest ones, written for those of us who
              want a <u>living faith</u>.
            </p>
          </div>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-14 text-base tracking-wide group"
            >
              <Link href="/calendar">
                Join Us This Week
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Questions</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-14">
            Common Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Your First Night</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-10">
            What to Expect
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            We open in prayer before diving into the text. Fr. Thom gives a little context, then
            we go through the text in depth for an hour. We ask questions, challenge answers, and
            come together at the end as brothers and sisters in Christ.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Ready to Join?</p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-6">
            We'd Love to See You
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            DTS meets every Thursday at 7:00 PM. Check the calendar for this week's location
            and reading. We'd love to see you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-8 h-14 text-base tracking-wide group"
            >
              <Link href="/calendar">
                View Calendar
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/15 rounded-none px-8 h-14 text-base tracking-wide"
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
