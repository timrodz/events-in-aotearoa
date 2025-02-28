"use client";

import { EventListView } from "@/components/EventListView";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { usePaginatedQuery } from "convex/react";

export default function HomePage() {
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

  return (
    <main className="p-8 flex flex-col gap-16">
      <div className="flex flex-col gap-4 max-w-full lg:max-w-screen-xl mx-auto">
        <EventListView events={eventsRaw} isLoading={isLoading} />
        <Button
          onClick={() => loadMore(10)}
          disabled={status !== "CanLoadMore"}
        >
          Load more
        </Button>
      </div>
    </main>
  );
}
