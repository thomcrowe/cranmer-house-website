/**
 * Event data for Cranmer House.
 *
 * Events are managed via the Keystatic CMS at /keystatic.
 * The sync script (scripts/sync-events.mjs) reads content/events/*.json
 * and generates lib/events-generated.ts before each build/dev start.
 */

import { generatedEvents } from './events-generated'

export type RawEventData = {
  id: string
  title: string
  date: string   // "YYYY-MM-DD"
  time: string
  location: string
  university: "oru" | "tu" | "both"
  description: string
  category: "dts" | "worship" | "social" | "service" | "formation"
}

export type Event = Omit<RawEventData, 'date'> & { date: Date }

function parseEvents(raw: RawEventData[]): Event[] {
  return raw
    .map(r => {
      const [year, month, day] = r.date.split('-').map(Number)
      return { ...r, date: new Date(year, month - 1, day) }
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}

export const events: Event[] = parseEvents(generatedEvents)

export function getEventsForDate(date: Date, universityFilter: "all" | "oru" | "tu"): Event[] {
  return events.filter(event => {
    const sameDay =
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    if (!sameDay) return false
    if (universityFilter === "all") return true
    if (event.university === "both") return true
    return event.university === universityFilter
  })
}

export function getUpcomingEvents(count: number, universityFilter: "all" | "oru" | "tu" = "all"): Event[] {
  const now = new Date()
  return events
    .filter(event => {
      if (event.date < now) return false
      if (universityFilter === "all") return true
      if (event.university === "both") return true
      return event.university === universityFilter
    })
    .slice(0, count)
}

export function getEventDates(universityFilter: "all" | "oru" | "tu"): Date[] {
  return events
    .filter(event => {
      if (universityFilter === "all") return true
      if (event.university === "both") return true
      return event.university === universityFilter
    })
    .map(event => event.date)
}

export const categoryColors: Record<Event["category"], string> = {
  dts: "bg-amber-500",
  worship: "bg-rose-500",
  social: "bg-sky-500",
  service: "bg-emerald-500",
  formation: "bg-violet-500",
}

export const categoryLabels: Record<Event["category"], string> = {
  dts: "Dead Theologians Society",
  worship: "Worship",
  social: "Social",
  service: "Service",
  formation: "Formation",
}
