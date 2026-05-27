'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

type FAQ = { q: string; a: string }

export function FaqAccordion({
  faqs,
  className,
}: {
  faqs: FAQ[]
  className?: string
}) {
  return (
    <Accordion type="single" collapsible className={className ?? 'w-full'}>
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
  )
}
