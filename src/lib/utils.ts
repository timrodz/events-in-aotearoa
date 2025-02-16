import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Event, EventModality } from "./types";
import { Doc } from "@/convex/_generated/dataModel";
import { ISOtoDate } from "./dates";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function eventModalityToPrettyString(modality: EventModality) {
  switch (modality) {
    case EventModality.InPerson:
      return "In Person";
    case EventModality.Online:
      return "Online";
    case EventModality.Hybrid:
      return "Hybrid";
  }
}

export function mapDbEventsToType(event: Doc<"events">): Event {
  return {
    id: event._id,
    blurb: event.blurb,
    dateRaw: event.dateRaw,
    dateParsed: event.dateParsed ? ISOtoDate(event.dateParsed) : null,
    isPublic: event.isPublic,
    modality: event.modality as EventModality,
    notes: event.notes,
    organiser: event.organiser,
    region: event.region,
    ticketsUrl: event.ticketsUrl,
    title: event.title,
    venue: event.venue,
    year: event.year,
  };
}
