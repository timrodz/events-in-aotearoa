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

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {events ? (
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
