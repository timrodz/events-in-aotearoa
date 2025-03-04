"use client";

import { EventCard } from "./EventCard";
import { parseDbEventToEvent } from "@/lib/type-parsers";
import { Doc } from "@/convex/_generated/dataModel";

type Props = {
  events: Array<Doc<"events">>;
  isLoading: boolean;
};

export const EventListView = ({ events: eventsRaw, isLoading }: Props) => {
  const events = eventsRaw?.map(parseDbEventToEvent) ?? [];

  if (isLoading) {
    return <p>Loading events...</p>;
  }

  if (!events) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};
