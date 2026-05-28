import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Resources | Cranmer House",
  description: "Free theological resources, recommended reading, Daily Office tools, and links for students exploring the Episcopal and Anglican tradition.",
}

const sections = [
  {
    id: "pray",
    label: "Pray Every Day",
    heading: "Daily Office Tools",
    description: "The Daily Office, Morning Prayer, Evening Prayer, and Compline, is the heartbeat of Anglican spiritual life. These resources make it easy to pray wherever you are.",
    items: [
      {
        title: "Venite",
        url: "https://venite.app",
        description: "A beautiful app for praying the Daily Office. Morning Prayer, Evening Prayer, and Compline, all in one place. Free and worth downloading.",
        tag: "Free · App"
      },
      {
        title: "Book of Common Prayer (1979)",
        url: "https://www.bcponline.org",
        description: "The full text of the 1979 BCP online. Liturgies, psalms, lectionary, collects, everything.",
        tag: "Free · Web"
      },
    ]
  },
  {
    id: "dts",
    label: "Current DTS Reading",
    heading: "On the Incarnation",
    description: "We're currently reading St. Athanasius of Alexandria, one of the great defenders of Christian orthodoxy. C.S. Lewis wrote the introduction to the modern translation and called it 'a masterpiece.'",
    items: [
      {
        title: "On the Incarnation, Free Text (CCEL)",
        url: "https://www.ccel.org/ccel/athanasius/incarnation.html",
        description: "Free online text of On the Incarnation from the Christian Classics Ethereal Library.",
        tag: "Free · Web"
      },
      {
        title: "On the Incarnation (Popular Patristics Series)",
        url: "https://www.amazon.com/Incarnation-Popular-Patristics-St-Athanasius/dp/0881414271",
        description: "The recommended print edition with C.S. Lewis's famous introduction: 'It is a masterpiece.' Worth owning.",
        tag: "~$12 · Print"
      },
    ]
  },
  {
    id: "classics",
    label: "Free Classics",
    heading: "Read the Church Fathers Free",
    description: "Most of what DTS reads is in the public domain. These libraries have everything.",
    items: [
      {
        title: "Christian Classics Ethereal Library (CCEL)",
        url: "https://www.ccel.org",
        description: "The best free library of Christian classics on the internet. Augustine, Athanasius, Chrysostom, Aquinas, Calvin, all free.",
        tag: "Free · Web"
      },
      {
        title: "Project Gutenberg",
        url: "https://www.gutenberg.org",
        description: "Thousands of public domain texts including many early Christian works and reformers.",
        tag: "Free · Web & eBook"
      },
      {
        title: "Ante-Nicene Fathers (Complete Set)",
        url: "https://www.ccel.org/fathers.html",
        description: "The complete Ante-Nicene Fathers and Nicene & Post-Nicene Fathers series, free. The full library of early Christian writing.",
        tag: "Free · Web"
      },
    ]
  },
  {
    id: "reading",
    label: "Recommended Reading",
    heading: "Books Worth Your Time",
    description: "A short list Fr. Thom recommends to students entering the Anglican tradition, or simply entering a more serious engagement with faith.",
    items: [
      {
        title: "Mere Christianity, C.S. Lewis",
        url: "https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926",
        description: "The classic case for Christian belief. Start here if you're exploring for the first time.",
        tag: "Essential"
      },
      {
        title: "The Anglican Spirit, Archbishop Michael Ramsey",
        url: "https://www.amazon.com/Anglican-Spirit-Seabury-Classics/dp/1596280042",
        description: "Originally delivered as lectures at Nashotah House, this is the most accessible introduction to what Anglicanism actually is and believes. Conversational, wise, and warm. Rowan Williams called it a treasure. Start here if you want to understand the tradition you're entering.",
        tag: "Anglican Essential"
      },
      {
        title: "The Spiritual Life, Evelyn Underhill",
        url: "https://www.amazon.com/Spiritual-Life-Evelyn-Underhill/dp/0819213501",
        description: "Originally four BBC radio broadcasts, this is Underhill's most accessible work. Short, profound, and deeply Anglican. She wrote it for ordinary people, not academics. One of the best introductions to Christian prayer ever written.",
        tag: "Anglican Classic"
      },
      {
        title: "On the Holy Spirit, St. Basil the Great",
        url: "https://www.amazon.com/Holy-Spirit-Basil-Popular-Patristics/dp/0881418765",
        description: "Basil's fourth-century defense of the full divinity of the Holy Spirit. Precise, pastoral, and essential. If you want to understand what the Church has always believed about the Spirit, start here.",
        tag: "DTS Classic"
      },
      {
        title: "Heavenly Participation, Hans Boersma",
        url: "https://www.amazon.com/Heavenly-Participation-Weaving-Sacramental-Tapestry/dp/0802865429",
        description: "A wake-up call for Western Christianity. Boersma argues that Catholics and evangelicals alike have lost a sacramental vision of reality that the Church Fathers took for granted. One of the most important books for understanding what Cranmer House is actually about.",
        tag: "Highly Recommended"
      },
      {
        title: "On the Apostolic Preaching, St. Irenaeus",
        url: "https://www.amazon.com/Apostolic-Preaching-Popular-Patristics-Irenaeus/dp/0881412740",
        description: "A short, direct statement of the faith from the second century. Irenaeus lays out the whole story of Scripture as a single unified narrative. Indispensable for understanding how the early Church read the Bible.",
        tag: "DTS Classic"
      },
      {
        title: "Lectures on the Christian Sacraments, St. Cyril of Jerusalem",
        url: "https://www.amazon.com/Lectures-Christian-Sacraments-Mystagogic-Catecheses/dp/0913836036",
        description: "Fourth-century instructions for new Christians preparing for baptism. Cyril walks through the sacraments with pastoral clarity. Essential for anyone who wants to understand what the Church has always meant by baptism and Eucharist.",
        tag: "DTS Classic"
      },
    ]
  },
  {
    id: "tradition",
    label: "The Episcopal Tradition",
    heading: "Learn About Anglicanism",
    description: "New to the Episcopal Church? These resources explain where we came from and what we believe.",
    items: [
      {
        title: "Anglican Compass",
        url: "https://anglicancompass.com",
        description: "The best online resource for Anglicans and those exploring the tradition. Serious theological content, accessible writing, and a genuine love for the Anglican inheritance. Worth bookmarking.",
        tag: "Web"
      },
      {
        title: "What Is Anglicanism?, Anglican Communion",
        url: "https://www.anglicancommunion.org/identity/what-is-anglicanism.aspx",
        description: "A brief, clear overview of the worldwide Anglican tradition that the Episcopal Church belongs to.",
        tag: "Web · Short Read"
      },
      {
        title: "St. John's Episcopal Church, Tulsa",
        url: "https://www.stjohnstulsa.org",
        description: "Cranmer House's home parish. Sunday worship at 8 AM and 10:30 AM. All are welcome.",
        tag: "Local"
      },
    ]
  },
]

export default function ResourcesPage() {
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
          <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Reading & Praying</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 max-w-3xl">
            Resources
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">
            Free tools for daily prayer, free texts of the Church Fathers, and Fr. Thom's recommended reading for students exploring the Anglican tradition.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-3 mt-10">
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs tracking-[0.15em] uppercase px-4 py-2 border border-primary-foreground/20 text-primary-foreground/70 hover:border-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resource sections */}
      <div>
        {sections.map((section, si) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-20 lg:py-28 ${si % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">{section.label}</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-4">
                {section.heading}
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-12 max-w-2xl">
                {section.description}
              </p>

              <div className="space-y-px">
                {section.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-start justify-between gap-6 py-6 px-2 border-t border-border group hover:bg-card transition-colors -mx-2 ${si % 2 === 0 ? "" : "hover:bg-background"}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h3 className="font-serif text-xl text-foreground group-hover:text-stone transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs tracking-wide text-muted-foreground border border-border px-2 py-0.5">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-foreground/55 leading-relaxed text-sm lg:text-base">
                        {item.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground/40 group-hover:text-stone transition-colors shrink-0 mt-1.5" />
                  </a>
                ))}
                <div className="border-t border-border" />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Read Together</p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-6">
            Join Us on Thursday
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Reading alone is good. Reading with others and then discussing it is far better.
            DTS meets every Thursday at 7 PM.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-8 h-14 text-base tracking-wide group">
            <Link href="/calendar">
              Find Next Meeting
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
