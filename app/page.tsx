"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { getUpcomingEvents, categoryColors, categoryLabels, type Event } from "@/lib/events"
// CanterburyCross no longer needed inline — logo.svg used instead
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  X
} from "lucide-react"

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="Cranmer House" className="h-6 lg:h-7 w-auto" />
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              About
            </a>
            <a href="#life" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              Our Life
            </a>
            <Link href="/dts" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              Dead Theologians
            </Link>
            <Link href="/calendar" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              Calendar
            </Link>
            <a href="#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/give">
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/15 rounded-none px-5 text-sm tracking-wide"
              >
                Give
              </Button>
            </Link>
            <Button
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-6 text-sm tracking-wide"
            >
              Join Us
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="flex flex-col py-6 px-6">
            <a href="#about" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#life" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Our Life
            </a>
            <a href="#chaplain" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Chaplain
            </a>
            <a href="#events" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Events
            </a>
            <Link href="/calendar" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Calendar
            </Link>
            <a href="#contact" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <Link href="/give" className="py-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Give
            </Link>
            <Button
              className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

// Hero Section - Full bleed, dramatic
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-primary">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23faf9f7' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <div className="relative z-10 w-full pb-20 pt-32 lg:pb-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-stone-light text-sm tracking-[0.3em] uppercase mb-6 lg:mb-8">
              An Episcopal Campus Ministry
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-[0.95] mb-8 text-balance">
              Ancient Faith for the Modern Campus
            </h1>
            <p className="text-primary-foreground/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              Forming students in the way of Christ through the riches of the Episcopal tradition at Oral Roberts University and the University of Tulsa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none px-8 h-14 text-base tracking-wide group"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/15 rounded-none px-8 h-14 text-base tracking-wide"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom edge decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Who We Are</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              A Community Rooted in Ancient Wisdom
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                Cranmer House is an Episcopal campus ministry for students seeking depth, beauty, and truth.
                We gather around the Book of Common Prayer, study the Church Fathers, and live the rhythm
                of the liturgical year together.
              </p>
              <p>
                Whether you&apos;re a lifelong Christian exploring liturgical tradition, someone wrestling 
                with doubt, or simply hungry for something more than Sunday services—you&apos;re welcome here.
              </p>
            </div>
            <div className="flex items-center gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-xl text-foreground leading-tight">Oral Roberts</p>
                <p className="font-serif text-xl text-foreground leading-tight">University</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">ORU · Tulsa</p>
              </div>
              <div className="h-12 w-px bg-border shrink-0" />
              <div>
                <p className="font-serif text-xl text-foreground leading-tight">University</p>
                <p className="font-serif text-xl text-foreground leading-tight">of Tulsa</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">TU · Tulsa</p>
              </div>
            </div>
          </div>
          
          {/* Downtown Tulsa skyline */}
          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1624464462397-f242b7aa8ba6?fm=jpg&q=80&w=800&auto=format&fit=crop"
              alt="Downtown Tulsa, Oklahoma skyline at sunset"
              className="absolute inset-0 w-full h-full object-cover editorial-image"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
              <p className="text-white/70 text-xs">Downtown Tulsa, Oklahoma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Our Life Section - What we do
function OurLifeSection() {
  const practices = [
    {
      number: "01",
      title: "Daily Office",
      description: "Praying Morning and Evening Prayer from the Book of Common Prayer, joining the ancient rhythm of the church."
    },
    {
      number: "02",
      title: "Eucharist",
      description: "Gathering at the Lord&apos;s Table to receive the Body and Blood of Christ in the holy mysteries."
    },
    {
      number: "03",
      title: "Reading the Fathers",
      description: "Our Dead Theologians Society meets to read the great teachers of the early church together."
    },
    {
      number: "04",
      title: "Spiritual Direction",
      description: "One-on-one pastoral care, confession, and guidance for the journey of faith."
    },
    {
      number: "05",
      title: "Fellowship",
      description: "Meals, conversations, and the simple gift of Christian friendship across campus life."
    }
  ]

  return (
    <section id="life" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl mb-16 lg:mb-20">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Our Life</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight">
            The Rhythms of Cranmer House
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {practices.map((practice) => (
            <div key={practice.number} className="bg-secondary p-8 lg:p-10 group hover:bg-card transition-colors">
              <p className="text-stone text-sm font-mono mb-4">{practice.number}</p>
              <h3 className="font-serif text-2xl text-foreground mb-4">{practice.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{practice.description}</p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="bg-primary p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Every Participant</p>
              <h3 className="font-serif text-2xl text-primary-foreground mb-4">Receives a Prayer Book</h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                Every regular member of Cranmer House receives their own copy of the Book of Common Prayer.
              </p>
            </div>
            <p className="font-serif text-lg text-primary-foreground/80 italic mt-8">
              &ldquo;Lex orandi, lex credendi&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Chaplain Section
function ChaplainSection() {
  return (
    <section id="chaplain" className="py-14 lg:py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-16">
          {/* Avatar */}
          <div className="shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-muted flex items-center justify-center">
            <span className="font-serif text-2xl text-primary/40">FT</span>
          </div>

          <div className="flex-1">
            <p className="text-stone text-sm tracking-[0.2em] uppercase mb-2">Our Chaplain</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight mb-4">
              Fr. Thom Crowe
            </h2>
            <p className="text-foreground/70 text-base lg:text-lg leading-relaxed max-w-2xl">
              Fr. Thom is an Episcopal priest and founder of Cranmer House. An ORU graduate, he
              previously served as a deacon in the Eastern Orthodox Church before finding his home in
              the Anglican tradition. He currently serves as Assisting Priest at Saint John&apos;s
              Episcopal Church and is passionate about introducing students to the Church Fathers,
              liturgical worship, and sacramental life.
            </p>
            <a
              href="mailto:frthom@cranmerhouse.org"
              className="inline-flex items-center gap-2 text-stone hover:text-foreground transition-colors mt-5 group"
            >
              <Mail className="h-4 w-4" />
              <span className="border-b border-stone/30 group-hover:border-foreground transition-colors text-sm">
                frthom@cranmerhouse.org
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Events Section
function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const upcomingEvents = getUpcomingEvents(4)

  return (
    <section id="events" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">What&apos;s Happening</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight">
            Upcoming Events
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {upcomingEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="text-left p-6 bg-background border border-border hover:border-stone/40 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start gap-4">
                {/* Date box */}
                <div className="shrink-0 flex flex-col items-center justify-center bg-secondary border border-border p-3 min-w-[56px]">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground leading-none">
                    {event.date.toLocaleDateString("en-US", { month: "short" })}
                  </span>
                  <span className="font-serif text-2xl text-foreground leading-tight mt-0.5">
                    {event.date.getDate()}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${categoryColors[event.category]}`} />
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {categoryLabels[event.category]}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-stone transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {event.time} · {event.location}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/calendar"
            className="inline-flex items-center gap-2 border border-border px-8 py-3 text-sm tracking-wide text-foreground hover:border-stone hover:text-stone transition-colors group"
          >
            View Full Calendar
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Event Detail Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-lg rounded-none">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${categoryColors[selectedEvent.category]}`} />
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {categoryLabels[selectedEvent.category]}
                  </span>
                </div>
                <DialogTitle className="font-serif text-2xl">
                  {selectedEvent.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Event details for {selectedEvent.title}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <Calendar className="w-4 h-4 text-stone shrink-0" />
                  <span>
                    {selectedEvent.date.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <Clock className="w-4 h-4 text-stone shrink-0" />
                  <span>{selectedEvent.time}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <MapPin className="w-4 h-4 text-stone shrink-0" />
                  <span>{selectedEvent.location}</span>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-foreground leading-relaxed">{selectedEvent.description}</p>
                </div>

                {selectedEvent.university !== "both" && (
                  <div className="pt-1">
                    <span className="text-xs px-3 py-1 bg-secondary text-muted-foreground">
                      {selectedEvent.university === "oru"
                        ? "Oral Roberts University"
                        : "University of Tulsa"}{" "}
                      students
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

// Homepage FAQ Section
function FAQSection() {
  const faqs = [
    {
      q: "What is Cranmer House?",
      a: "Cranmer House is an Episcopal campus ministry serving students at Oral Roberts University and the University of Tulsa. We're named after Thomas Cranmer — the Archbishop of Canterbury who compiled the Book of Common Prayer. We gather for theological reading, worship, and Christian fellowship.",
    },
    {
      q: "Do I have to be Episcopalian — or even Christian — to come?",
      a: "Not at all. Dead Theologians Society regularly draws students from Baptist, Catholic, non-denominational, Orthodox, and even skeptical backgrounds. If you're curious about faith, history, or the big questions, you're welcome here.",
    },
    {
      q: "What is the Dead Theologians Society?",
      a: "DTS is our weekly reading group where we work through a classic text of Christian history — Augustine's Confessions, Athanasius' On the Incarnation, Julian of Norwich, and more. We meet every Thursday at 7 PM. No prior reading required.",
    },
    {
      q: "How do I get connected?",
      a: "The easiest way is to show up to DTS on a Thursday at 7 PM. You can also sign up for our weekly email or reach out to Fr. Thom directly at frthom@cranmerhouse.org.",
    },
    {
      q: "What is the Book of Common Prayer?",
      a: "The Book of Common Prayer (BCP) is the historic prayer book of the Anglican tradition, first compiled by Thomas Cranmer in 1549. It contains liturgies for Sunday worship, the Daily Office, baptism, marriage, and more. Every regular Cranmer House member receives their own copy.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Common Questions</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight">
            What to Know Before You Come
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border last:border-b-0">
              <AccordionTrigger className="font-serif text-xl text-foreground py-6 hover:no-underline hover:text-stone text-left pr-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-foreground/65 leading-relaxed text-base lg:text-lg">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 pt-8 border-t border-border">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-stone hover:text-foreground transition-colors text-sm group"
          >
            View all questions
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Email Capture Section
// TODO: Wire the form action to Kit (kit.com) — free up to 10k subscribers,
// much better than Mailchimp. Create a form in Kit and replace action="#" with
// your Kit form URL, e.g. action="https://app.kit.com/forms/XXXXXX/subscriptions"
function EmailCaptureSection() {
  return (
    <section className="py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-stone-light text-sm tracking-[0.2em] uppercase mb-4">Stay Connected</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-primary-foreground leading-tight">
              Get the Weekly Email
            </h2>
            <p className="text-primary-foreground/65 mt-4 leading-relaxed">
              DTS reading for the week, upcoming events, and occasional notes from Fr. Thom.
              No spam. Unsubscribe anytime.
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md"
          >
            <input
              type="email"
              name="email_address"
              placeholder="your@email.com"
              required
              className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm focus:outline-none focus:border-stone transition-colors"
            />
            <button
              type="submit"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 text-sm tracking-wide transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    campus: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-stone text-sm tracking-[0.2em] uppercase mb-4">Get in Touch</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10">
              Whether you have questions about the Episcopal tradition, want to visit one of our gatherings,
              or simply want to connect—reach out.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:frthom@cranmerhouse.org" 
                className="flex items-center gap-4 text-foreground group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-stone transition-colors">
                  <Mail className="h-5 w-5 text-stone" />
                </div>
                <span className="text-lg">frthom@cranmerhouse.org</span>
              </a>
              
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-stone" />
                </div>
                <div>
                  <p className="text-lg">Serving ORU & TU</p>
                  <p className="text-muted-foreground">Tulsa, Oklahoma</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-stone" />
                </div>
                <div>
                  <p className="text-lg">Affiliated Parish</p>
                  <p className="text-muted-foreground">St. John&apos;s Episcopal Church, Tulsa</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-secondary p-8 lg:p-12">
            <h3 className="font-serif text-2xl text-foreground mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-foreground">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border rounded-none h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border rounded-none h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="campus" className="text-sm text-foreground">Campus</Label>
                <Select value={formData.campus} onValueChange={(value) => setFormData({ ...formData, campus: value })}>
                  <SelectTrigger className="bg-background border-border rounded-none h-12">
                    <SelectValue placeholder="Select your campus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oru">Oral Roberts University</SelectItem>
                    <SelectItem value="tu">University of Tulsa</SelectItem>
                    <SelectItem value="other">Other / Community</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border rounded-none min-h-[120px] resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 text-base tracking-wide"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-primary-foreground/10">
          {/* Brand */}
          <div>
            <img src="/logo.svg" alt="Cranmer House" className="h-6 w-auto" />
            <p className="text-primary-foreground/60 text-sm mt-2 leading-relaxed">
              An Episcopal campus ministry serving students at ORU and TU in Tulsa, Oklahoma.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/cranmerhouse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/cranmerhouse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:frthom@cranmerhouse.org"
                aria-label="Email"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.2em] uppercase mb-5">Explore</p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
              <a href="#life" className="hover:text-primary-foreground transition-colors">Our Life</a>
              <Link href="/dts" className="hover:text-primary-foreground transition-colors">Dead Theologians Society</Link>
              <Link href="/calendar" className="hover:text-primary-foreground transition-colors">Calendar</Link>
              <Link href="/resources" className="hover:text-primary-foreground transition-colors">Resources</Link>
            </div>
          </div>

          {/* More links */}
          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.2em] uppercase mb-5">More</p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <Link href="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link>
              <Link href="/give" className="hover:text-primary-foreground transition-colors">Give</Link>
              <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
              <a
                href="https://www.stjohnstulsa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                St. John&apos;s Episcopal Church ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 text-center text-sm text-primary-foreground/35">
          <p>&copy; {new Date().getFullYear()} Cranmer House. A ministry of St. John&apos;s Episcopal Church, Tulsa.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function CranmerHousePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <OurLifeSection />
      <ChaplainSection />
      <EventsSection />
      <FAQSection />
      <EmailCaptureSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
