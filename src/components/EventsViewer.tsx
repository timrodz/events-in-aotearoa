"use client";

import { api } from "@/convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { EventCard } from "./EventCard";
import { mapDbEventsToType } from "@/lib/utils";

export const EventsViewer = () => {
  const {
    results: eventsRaw,
    status,
    isLoading,
    loadMore,
  } = usePaginatedQuery(
    api.myFunctions.listEvents,
    {},
    { initialNumItems: 10 },
  ) ?? {};

  const events = eventsRaw?.map(mapDbEventsToType) ?? [];
  return (
    <div className="w-full backdrop-blur-lg bg-black/15 px-8 py-6 rounded-md text-zinc-100/75 space-y-2">
      {isLoading && <p>Loading...</p>}
      {events ? (
        <div className="columns-3 gap-4 mb-4">
          {events.map((event) => (
            <div key={event.id} className="mb-8">
              <EventCard key={event.id} {...event} />
            </div>
          ))}
        </div>
      ) : null}
      <button
        // TODO: Automatically scroll to the end result when the screen finishes loading
        onClick={() => loadMore(10)}
        disabled={status !== "CanLoadMore"}
        className="bg-green-700 pointer-events-auto"
      >
        Load more
      </button>
    </div>
  );
};
