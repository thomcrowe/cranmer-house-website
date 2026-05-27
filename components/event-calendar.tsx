"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  events,
  getEventsForDate,
  getEventDates,
  categoryColors,
  categoryLabels,
  type Event,
} from "@/lib/events"
import { MapPin, Clock, Calendar as CalendarIcon } from "lucide-react"

export function EventCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined)
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null)
  const [universityFilter, setUniversityFilter] = React.useState<"all" | "oru" | "tu">("all")

  const eventDates = React.useMemo(() => getEventDates(universityFilter), [universityFilter])
  const selectedDateEvents = React.useMemo(
    () => (selectedDate ? getEventsForDate(selectedDate, universityFilter) : []),
    [selectedDate, universityFilter]
  )

  const modifiers = React.useMemo(() => ({ hasEvent: eventDates }), [eventDates])
  const modifiersStyles = { hasEvent: { position: "relative" as const } }

  return (
    <div className="w-full">
      {/* University Filter */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className="text-sm text-muted-foreground tracking-wide">Show events for:</span>
        <div className="flex border border-border">
          {(["all", "oru", "tu"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setUniversityFilter(filter)}
              className={`px-5 py-2 text-sm tracking-wide transition-colors ${
                universityFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-secondary"
              }`}
            >
              {filter === "all" ? "All" : filter.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
        {/* Calendar */}
        <div className="border border-border p-4 bg-card">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            className="[&_.rdp-day]:relative"
            components={{
              DayButton: ({ day, ...props }) => {
                const dayEvents = events.filter(
                  (e) =>
                    e.date.getDate() === day.date.getDate() &&
                    e.date.getMonth() === day.date.getMonth() &&
                    e.date.getFullYear() === day.date.getFullYear() &&
                    (universityFilter === "all" ||
                      e.university === "both" ||
                      e.university === universityFilter)
                )
                const hasEvent = dayEvents.length > 0
                return (
                  <button
                    {...props}
                    className={`relative w-full h-full p-2 text-sm hover:bg-accent transition-colors ${
                      props.className || ""
                    }`}
                  >
                    {day.date.getDate()}
                    {hasEvent && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                        {dayEvents.slice(0, 3).map((event, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${categoryColors[event.category]}`}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                )
              },
            }}
          />
        </div>

        {/* Events for Selected Date */}
        <div className="flex-1 min-w-[300px] max-w-md">
          {selectedDate ? (
            <div>
              <h3 className="font-serif text-xl text-foreground mb-6">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </h3>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-px">
                  {selectedDateEvents.map((event) => (
                    <button
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="w-full text-left py-5 px-4 border-t border-border hover:bg-secondary transition-colors group flex items-start gap-4"
                    >
                      <div
                        className={`w-1 self-stretch rounded-full mt-1 ${categoryColors[event.category]}`}
                      />
                      <div className="flex-1">
                        <p className="font-serif text-lg text-foreground group-hover:text-foreground/80 transition-colors">
                          {event.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {event.time} · {event.location}
                        </p>
                        <span className="inline-block mt-2 text-xs tracking-wide text-muted-foreground uppercase">
                          {categoryLabels[event.category]}
                          {event.university !== "both" && ` · ${event.university.toUpperCase()} only`}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  No events scheduled for this date.
                </p>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <CalendarIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-sm tracking-wide">
                Select a date to see events
              </p>
            </div>
          )}
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
                  <CalendarIcon className="w-4 h-4 text-stone shrink-0" />
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
    </div>
  )
}
