import { type Event as EventType } from "@/lib/types";
import { eventModalityToPrettyString } from "@/lib/utils";

type EventProps = EventType;

export const EventCard = (props: EventProps) => {
  return (
    <div key={props.id} className="rounded-md bg-zinc-800 p-2">
      <h1>{props.title}</h1>
      <p>Date/Time: {props.dateParsed || props.dateRaw})</p>
      <p>Location: {props.region}</p>
      <p>Description: {props.blurb}</p>
      <p>In-Person/Hybrid: {eventModalityToPrettyString(props.modality)}</p>
      <p>Category: {props.organiser}</p>
      <p>Notes: {props.notes}</p>
      <a href={props.ticketsUrl} target="_blank" rel="noopener noreferrer">
        Event Link
      </a>
    </div>
  );
};
