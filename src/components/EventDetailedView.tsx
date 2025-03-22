"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { dateToString, getDateInfo } from "@/lib/dates";
import { MapPin, Calendar, Ticket, Info } from "lucide-react";
import { parseDbEventToEvent } from "@/lib/type-parsers";

type Props = {
  id: string;
};

export const EventDetailedView = ({ id }: Props) => {
  const data = useQuery(api.myFunctions.getEventById, {
    id: id as Id<"events">,
  });

  if (data === undefined) {
    return <div className="text-center py-10 text-stone-400">Loading...</div>;
  }

  if (!data?.event) {
    return (
      <div className="text-center py-10 text-red-500">Event not found</div>
    );
  }

  const event = parseDbEventToEvent(data.event);
  const date = event.dateParsed
    ? dateToString(event.dateParsed)
    : event.dateRaw;
  const dateInfo = event.dateParsed ? getDateInfo(event.dateParsed) : undefined;

  return (
    <div className="relative">
      <div className="lg:min-w-[32rem] absolute inset-0 overflow-hiddens lg:right-[calc(max(2rem,50%-38rem)+40rem)]">
        <div className="relative translate-x-1/2 -z-10 translate-y-1/2 rotate-[45deg]">
          <div className="absolute h-[400px] w-[400px] rounded-tr-full bg-gradient-to-l from-stone-900/10 to-stone-500/50 blur-3xl" />
          <div className="absolute h-[200px] w-[200px] rounded-tr-full bg-gradient-to-l from-stone-900/10 to-stone-500/50 blur-2xl" />
          <div className="absolute h-[100] w-[100px] rounded-tr-full bg-gradient-to-l from-stone-900/10 to-stone-500/50 blur-xl" />
        </div>
        <div className="group relative flex -z-10 -translate-y-1/4">
          <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
          <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
          <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
          <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
          <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
          <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
          <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
        </div>
      </div>
      <div className="mx-auto 2xl:max-w-screen-2xl max-w-screen-xl px-4 2xl:px-20 relative xl:z-10 ">
        <div className="xl:absolute">
          <div className="flex max-md:py-4 ">
            <a
              className="group flex text-sm font-semibold leading-6 transition-colors  text-white hover:text-stone-200 md:px-4 md:py-2 "
              href="/"
            >
              <svg
                viewBox="0 -9 3 24"
                className="mr-3 h-6 w-auto overflow-visible  "
              >
                <path
                  d="M3 0L0 3L3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              Go back
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-4xl relative isolate mx-auto">
        <div className=" inset-0 absolute -z-10 bg-gradient-to-br from-stone-800 rounded-xl via-stone-900 via-30% to-stone-900" />
        <div className="absolute inset-px -z-10 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_150%)]"></div>

        <div className="lg:p-24 p-12 space-y-6">
          <h1 className="text-5xl relative font-bold tracking-tighter bg-gradient-to-r from-white to-stone-500 text-transparent bg-clip-text text-pretty leading-tighter lg:leading-[1.1]">
            {event.title}
          </h1>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-400">
              <Calendar className="size-5 text-stone-500" />
              <span>{date}</span>
            </div>
            {/* <div className="text-stone-300 items-center bg-stone-900 space-y-0.5 text-xs flex flex-col w-10 h-10 border border-stone-700 mx-0 border-solid rounded-md">
              <span className="bg-stone-700/80 font-bold  text-[0.5rem] w-full text-center uppercase ">
                mar
              </span>
              <span className="font-bold text-sm">24</span>
            </div> */}
            <div className="flex items-center gap-2 text-stone-400">
              <MapPin className="size-5 text-stone-500" />
              <span>{event.venue}</span>
            </div>
          </div>

          <h3 className="font-semibold border-b border-stone-800 pb-6 text-white leading-none tracking-tight">
            About the event
          </h3>
          <p className="text-pretty text-stone-300 text-base font-light sm:text-lg">
            {event.blurb}
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href={event.ticketsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-lime-500 text-lime-500 rounded-lg transition hover:bg-lime-500 hover:text-stone-900"
            >
              <Ticket className="size-5" /> Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
