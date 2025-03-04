"use client";

import { ButtonCTA } from "@/components/ButtonCTA";
import { EventListView } from "@/components/EventListView";
import { LinkCTA } from "@/components/LinkCTA";
import { api } from "@/convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import Image from "next/image";

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
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section id="hero">
          <div className="relative w-full lg:fixed lg:w-1/2 ">
            <div className="h-[75vh] lg:h-[100vh] flex items-center">
              <div className="mx-10 lg:mx-40">
                <div className="">
                  <Image
                    src="/kiwi.svg"
                    alt="Events in Aotearoa Logo"
                    width={64}
                    height={64}
                  />
                  <div className="ml-2">
                    <div className="mb-8">
                      <h1 className="text-5xl font-bold text-left text-white mb-2">
                        Tech Events in Aotearoa
                      </h1>
                      <p className="ml-1 text-xl w-3/4 text-white">
                        This list was created to share info on tech, innovation
                        and startup events in Aotearoa New Zealand.
                      </p>
                    </div>
                    <LinkCTA label="Add your event" href="/add-event" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:fixed lg:bottom-8 lg:left-28 mx-10">
              <p className="text-left text-stone-400">
                Brought to you by{" "}
                <a
                  className="text-[#a2ea2e] font-medium"
                  href="https://www.arielcerda.com/about-en"
                >
                  Ariel Cerda
                </a>
                ,{" "}
                <a
                  className="text-[#a2ea2e] font-medium"
                  href="https://www.timrodz.dev"
                >
                  Juan Morais
                </a>{" "}
                &{" "}
                <a className="text-[#a2ea2e] font-medium">
                  Techstars Startup Digest
                </a>
              </p>
            </div>
          </div>
        </section>
        <section id="events" className="h-full ">
          <div className="mx-4 mt-16 lg:mx-10 lg:mt-10">
            <EventListView events={eventsRaw} isLoading={isLoading} />
            <div className="mt-4">
              <ButtonCTA
                onClick={() => loadMore(10)}
                disabled={
                  status === "LoadingMore" ||
                  status === "LoadingFirstPage" ||
                  status === "Exhausted"
                }
                label="See more"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
