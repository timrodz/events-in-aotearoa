"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { EventCard } from "./EventCard";
import { parseDbEventToEvent } from "@/lib/type-parsers";

type Props = {
  id: string;
};

export const EventDetailedView = ({ id }: Props) => {
  const data = useQuery(api.myFunctions.getEventById, {
    id: id as Id<"events">,
  });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data?.event) {
    return <div>Event not found</div>;
  }

  const mappedEvent = parseDbEventToEvent(data.event);

  return <EventCard {...mappedEvent} />;
};
