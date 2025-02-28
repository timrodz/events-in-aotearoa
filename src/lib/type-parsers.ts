import { parseDate } from "./dates";
import { Event, EventModality } from "./types";
import { Doc } from "@/convex/_generated/dataModel";

export function parseDbEventToEvent(event: Doc<"events">): Event {
  return {
    id: event._id,
    title: event.title,
    blurb: event.blurb,
    dateParsed: event.dateParsed ? parseDate(event.dateParsed) : null,
    dateRaw: event.dateRaw,
    region: event.region,
    isPublic: event.isPublic,
    notes: event.notes,
    organiser: event.organiser,
    ticketsUrl: event.ticketsUrl,
    venue: event.venue,
    year: event.year,
    modality: event.modality as EventModality,
  };
}

export function eventModalityToPrettyString(modality: EventModality): string {
  switch (modality) {
    case EventModality.InPerson:
      return "In-Person";
    case EventModality.Online:
      return "Online";
    case EventModality.Hybrid:
      return "Hybrid";
    default:
      // TODO: Confirm this logic
      return "In-Person";
  }
}
