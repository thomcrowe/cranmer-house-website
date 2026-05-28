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
        a: "Cranmer House is an Episcopal campus ministry serving students at Oral Roberts University and the University of Tulsa. We're named after Thomas Cranmer, the 16th-century Archbishop of Canterbury who compiled the Book of Common Prayer. We gather for theological reading, worship, and Christian fellowship.",
      },
      {
        q: "Do I have to be Episcopalian, or even Christian, to come?",
        a: "Not at all. Our Dead Theologians Society regularly welcomes students from Baptist, Catholic, non-denominational, Orthodox, and skeptical backgrounds. If you're curious about faith, history, or the big questions, you're welcome at our table.",
      },
      {
        q: "What is the Episcopal Church?",
        a: "The Episcopal Church is the American branch of the worldwide Anglican Communion, a family of churches that traces its roots to the Church of England. We share the same faith as Anglican churches globally: Scripture, the historic creeds, sacramental worship, and the Book of Common Prayer.",
      },
      {
        q: "Is this connected to a local church?",
        a: "Yes. Cranmer House is a ministry of St. John's Episcopal Church in Tulsa. Fr. Thom serves as Assisting Priest there. Students are always welcome at Sunday worship at St. John's, though Cranmer House gatherings are campus-based and completely separate from Sunday morning.",
      },
    ],
  },
  {
    category: "Getting Involved",
    questions: [
      {
        q: "How do I get connected?",
        a: "The easiest way is to show up to Dead Theologians Society on a Thursday at 7 PM. You can also sign up for our email, it has the DTS reading, upcoming events, and notes from Fr. Thom. Or just email Fr. Thom directly at frthom@cranmerhouse.org.",
      },
      {
        q: "What happens at my first DTS gathering?",
        a: "You show up and someone greets you. We start with a brief summary of where we are in the reading, so don't worry if you haven't read ahead. We discuss for about an hour. There's usually food. Nobody will quiz you or put you on the spot. The only requirement is showing up.",
      },
      {
        q: "Is there a cost to participate?",
        a: "No. All Cranmer House gatherings are free. We provide food, copies of whatever we're reading, and eventually a Book of Common Prayer for anyone who becomes a regular.",
      },
      {
        q: "What if I'm from a different denomination?",
        a: "You're welcome. Many of our most committed members came from non-Anglican backgrounds and found the liturgical tradition to be a gift rather than a barrier. We're not trying to convert you away from your home church, but if you're exploring, we're glad to explore with you.",
      },
      {
        q: "Can graduate students or non-students participate?",
        a: "Yes. While our primary focus is undergraduates at ORU and TU, graduate students, faculty, and community members have always been part of Cranmer House. Reach out to Fr. Thom and he'll help you find the right fit.",
      },
    ],
  },
  {
    category: "Dead Theologians Society",
    questions: [
      {
        q: "What is the Dead Theologians Society?",
        a: "DTS is our weekly reading group where we work through a classic text of Christian history together. We've read Augustine's Confessions, Athanasius' On the Incarnation, Julian of Norwich, C.S. Lewis, Dietrich Bonhoeffer, and more. Each week we read a chapter or section, then gather to discuss it.",
      },
      {
        q: "Do I need to do the reading beforehand?",
        a: "It helps, but it's not required. We always summarize what we've read before the discussion begins. If you couldn't get to it, come anyway, some of our best conversations happen with a fresh set of eyes.",
      },
      {
        q: "I've never read theology before. Is DTS for me?",
        a: "Especially for you. We've found that students without a theology background often ask the most interesting questions. We read together, discuss together, and figure it out together. No prior expertise needed, ever.",
      },
      {
        q: "How do I get the books?",
        a: "We provide copies of whatever we're reading, or we'll point you to free online versions. Many Church Fathers are available free on Project Gutenberg or the Christian Classics Ethereal Library (ccel.org).",
      },
    ],
  },
  {
    category: "Worship & Practice",
    questions: [
      {
        q: "What is the Book of Common Prayer?",
        a: "The Book of Common Prayer (BCP) is the historic prayer book of the Anglican tradition, first compiled by Thomas Cranmer in 1549. It contains liturgies for Sunday worship, the Daily Office (Morning and Evening Prayer), baptism, marriage, burial, and more. Every Cranmer House regular receives their own copy.",
      },
      {
        q: "What is Compline?",
        a: "Compline (pronounced 'comp-lin') is the Night Prayer of the Church, a short, contemplative service of psalms, a brief reading, and prayers. It's been prayed by monks and ordinary Christians before sleep for over a thousand years. It takes about 20 minutes and is one of the most peaceful things we do.",
      },
      {
        q: "What is the Daily Office?",
        a: "The Daily Office is the ancient practice of praying at set hours throughout the day, Morning Prayer, Noonday Prayer, Evening Prayer, and Compline. The Book of Common Prayer provides these offices for daily use. Cranmer House helps students enter this rhythm of prayer.",
      },
      {
        q: "Can I receive communion at your services?",
        a: "At Episcopal Eucharists, all baptized Christians are welcome to receive communion. If you haven't been baptized or aren't sure, you're warmly welcome to come forward for a blessing, just cross your arms over your chest and Fr. Thom will pray over you.",
      },
      {
        q: "What is spiritual direction?",
        a: "Spiritual direction is a one-on-one conversation with Fr. Thom about your interior life, your relationship with God, your doubts, your questions, your sense of calling. It's not therapy or counseling. It's pastoral accompaniment for the journey of faith. Fr. Thom offers this to Cranmer House students at no charge.",
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
