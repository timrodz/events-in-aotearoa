export enum EventModality {
  InPerson = "in_person",
  Online = "online",
  Hybrid = "hybrid",
}

export type Event = {
  id: string;
  title: string;
  organiser: string;
  dateRaw: string;
  dateParsed: string | null;
  modality: EventModality;
  region: string;
  venue: string;
  ticketsUrl: string;
  notes: string;
  year: number | null;
  isPublic: boolean;
  blurb: string;
};
