import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqAccordion } from "@/components/faq-accordion"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "FAQ | Cranmer House",
  description: "Common questions about Cranmer House, the Episcopal tradition, Dead Theologians Society, and what to expect at your first gathering.",
}

const faqSections = [
  {
    category: "About Cranmer House",
    questions: [
      {
        q: "What is Cranmer House?",
        a: "Cranmer House is an Episcopal campus ministry at Oral Roberts University and the University of Tulsa. We pray together, study the Scriptures, read the Church Fathers, and fellowship as we grow together in Christ.",
      },
      {
        q: "What do you believe?",
        a: "We are credal Christians and our beliefs are outlined in the Nicene Creed.",
      },
      {
        q: "Do I have to be Episcopalian to come?",
        a: "Not at all. People come from all kinds of backgrounds, or no religious background at all. You don't need to know anything about the Episcopal Church or the Anglican tradition to walk through the door. If you're curious, you're welcome.",
      },
      {
        q: "What if I'm from a different denomination?",
        a: "You're welcome. Many people find that the liturgical tradition offers something they didn't know they were missing. We're not here to replace your home church. But if you're exploring, we'll explore with you.",
      },
      {
        q: "Where does Cranmer House meet?",
        a: "We're working to set up our gatherings at ORU and TU. The best way to find out where we're meeting is to sign up for our email or reach out to Fr. Thom. He'd love to hear from you.",
      },
    ],
  },
  {
    category: "Worship & Practice",
    questions: [
      {
        q: "What should I expect at an Episcopal service?",
        a: "Episcopal worship is a connection of Word (Scriptures) and Table (the Eucharist). You can find our services in the Book of Common Prayer. At both campuses, we'll read from the Daily Office or Compline, and if you join us for the Eucharist at Saint John's, most of what happens is in a bulletin you can follow along. Nobody expects you to know everything on your first visit. Come and worship with us.",
      },
      {
        q: "Can I receive communion?",
        a: "All baptized Christians are welcome to receive the Eucharist. If you have not been baptized or would prefer not to receive, you are warmly welcome to come forward for a blessing. Simply cross your arms over your chest and Fr. Thom will pray for you.",
      },
      {
        q: "What is the Book of Common Prayer?",
        a: "The Book of Common Prayer (BCP) is the historic prayer book of the Anglican tradition, first compiled by Thomas Cranmer in 1549. It contains liturgies for Sunday worship, the Daily Office (Morning and Evening Prayer), baptism, marriage, burial, and more. Every Cranmer House regular receives their own copy.",
      },
      {
        q: "What is the Daily Office?",
        a: "The Daily Office is the ancient practice of praying at set hours throughout the day, Morning Prayer, Noonday Prayer, Evening Prayer, and Compline. The Book of Common Prayer provides these offices for daily use. Cranmer House helps students enter this rhythm of prayer.",
      },
    ],
  },
  {
    category: "Dead Theologians Society",
    questions: [
      {
        q: "What happens at my first DTS gathering?",
        a: "You show up and someone greets you. We start with a brief summary of where we are in the reading, so don't worry if you haven't read ahead. We discuss for about an hour. There's usually food. Nobody will quiz you or put you on the spot. The only requirement is showing up.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-10 text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
          <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Questions & Answers</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Common Questions
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">
            Everything you might want to know before showing up for the first time.
            Still have a question? Email Fr. Thom at{" "}
            <a href="mailto:frthom@cranmerhouse.org" className="text-stone-light hover:text-primary-foreground underline underline-offset-2 transition-colors">
              frthom@cranmerhouse.org
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {faqSections.map((section) => (
              <div key={section.category}>
                <p className="text-stone text-sm tracking-[0.2em] uppercase mb-6">{section.category}</p>
                <FaqAccordion faqs={section.questions} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Still curious?</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Come See for Yourself
          </h2>
          <p className="text-foreground/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            The best way to understand Cranmer House is to come to a Thursday DTS gathering.
            No commitment, no preparation required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-14 text-base tracking-wide group">
              <Link href="/calendar">
                Find Next Gathering
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border rounded-none px-8 h-14 text-base tracking-wide">
              <Link href="/#contact">Contact Fr. Thom</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
