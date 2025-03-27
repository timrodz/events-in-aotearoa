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
    <main className="flex min-h-full flex-col">
      {/* Updated Hero */}
      <section
        id="hero"
        className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden opacity-50 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]"
          style={{
            background:
              "url(https://d8nrpaglj2m0a.cloudfront.net/6543a097-6331-4438-b779-8529b63186d0/images/noise.png) repeat",
          }}
        />
        <div className="absolute inset-0 -z-20 overflow-hidden bg-gradient-to-t from-stone-950 to-stone-950/90 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]" />
        <div className="lsg:min-w-[32rem] absolute inset-0 -z-10 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)]">
          <div className="relative translate-x-1/2 translate-y-1/2 rotate-[45deg]">
            <div className="absolute h-[400px] w-[400px] rounded-tr-full bg-gradient-to-l from-stone-500/10 to-stone-500 blur-3xl" />
            <div className="absolute h-[200px] w-[200px] rounded-tr-full bg-gradient-to-l from-stone-300/10 to-stone-300 blur-2xl" />
            <div className="absolute h-[100] w-[100px] rounded-tr-full bg-gradient-to-l from-stone-100/10 to-stone-100 blur-xl" />
          </div>
          <div className="group relative flex -translate-y-1/4">
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
            <div className="h-[400px] w-[400px] rotate-45 bg-gradient-to-br from-stone-500/20 via-transparent to-transparent" />
          </div>
        </div>
        <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
          <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
            <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
              <div className="relative">
                <div className="mb-8 size-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-8 rounded-full fill-lime-300 stroke-lime-800 ring ring-lime-600"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 51 51"
                  >
                    <path
                      strokeWidth="2"
                      fillRule="evenodd"
                      d="M50.15 25.762c0 13.815-11.198 25.013-25.012 25.013C11.322 50.775.124 39.577.124 25.763.125 11.947 11.323.75 25.137.75 38.953.75 50.15 11.948 50.15 25.762ZM25.952 9.052c0 1.01-.409 1.827-.913 1.827-.505 0-.914-.818-.914-1.827 0-1.01.409-1.827.914-1.827.504 0 .913.818.913 1.827Zm.363 7.28 2.367-2.189c1.157-1.068 3.023-.17 2.909 1.4l-.235 3.216a1.735 1.735 0 0 0 1.469 1.842l3.187.487c1.556.237 2.017 2.258.718 3.147l-2.66 1.821a1.735 1.735 0 0 0-.524 2.297l1.607 2.795c.784 1.365-.508 2.985-2.013 2.524l-3.083-.944a1.735 1.735 0 0 0-2.122 1.022l-1.184 2.999c-.578 1.464-2.65 1.464-3.228 0l-1.184-3a1.735 1.735 0 0 0-2.122-1.021l-3.083.944c-1.505.46-2.797-1.16-2.013-2.524l1.607-2.795a1.735 1.735 0 0 0-.524-2.297l-2.66-1.821c-1.3-.89-.838-2.91.718-3.147l3.187-.487a1.735 1.735 0 0 0 1.468-1.842l-.234-3.215c-.115-1.57 1.752-2.47 2.908-1.401l2.368 2.188c.665.615 1.69.615 2.356 0Zm-11.756.012c.335-.378-.006-1.227-.76-1.896-.756-.67-1.639-.907-1.974-.53-.335.378.006 1.227.76 1.896.755.67 1.639.907 1.974.53Zm23.156-.457c.714-.714 1.003-1.582.646-1.938-.357-.357-1.224-.068-1.938.646-.714.713-1.003 1.58-.646 1.938.357.357 1.224.067 1.938-.646Zm2.194 11.308c1.003.112 1.77.61 1.715 1.111-.056.501-.915.817-1.917.705-1.003-.112-1.771-.609-1.715-1.11.056-.502.914-.818 1.917-.706Zm-29.437 1.708c1.009 0 1.827-.409 1.827-.913 0-.505-.818-.914-1.827-.914-1.01 0-1.827.41-1.827.914s.818.913 1.827.913Zm8.82 8.219c.437.252.382 1.165-.122 2.04-.505.873-1.268 1.377-1.705 1.125-.437-.252-.382-1.165.122-2.04.505-.873 1.268-1.377 1.705-1.125Zm13.62 3.226c.446-.238.42-1.152-.055-2.043-.475-.89-1.221-1.419-1.666-1.18-.445.237-.42 1.151.055 2.041.475.89 1.222 1.42 1.667 1.182Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-6">
                  <h1 className="text-3xl leading-tight uppercase font-bold tracking-tighter text-lime-50 md:text-5xl lg:leading-[1.0]">
                    Tech events in{" "}
                    <span className="text-lime-300">Aotearoa</span>
                  </h1>
                  <p className="max-w-2xl text-lg pb-3 font-light text-lime-50">
                    This list was created to share info on tech, innovation, and
                    startup events in Aotearo New Zealand.
                  </p>
                  <LinkCTA label="Add your event" href="/add-event" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
              <div className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-stone-500">
                <p className="text-left text-stone-400">
                  Brought to you by{" "}
                  <a
                    className="text-lime-500 font-medium"
                    href="https://www.arielcerda.com/about-en"
                    target="blank"
                  >
                    Ariel Cerda
                  </a>
                  ,{" "}
                  <a
                    className="text-lime-500 font-medium"
                    href="https://www.timrodz.dev"
                    target="blank"
                  >
                    Juan Morais
                  </a>{" "}
                  <br />
                  via:{" "}
                  <a
                    className="text-lime-500 font-medium"
                    href="https://docs.google.com/spreadsheets/d/1MpH9z4vZnHhYdvmMIYQyht69H4krUye9mEWSXmn81as/edit?gid=556103681#gid=556103681"
                    target="blank"
                  >
                    Techstars Startup Digest
                  </a>
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 mx-auto mt-64 w-full max-w-(--breakpoint-2xl) overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#85807E,transparent_80%)] before:opacity-90 lg:mt-96">
                <div className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 border-t-[#ffffffd7] bg-[#0a0a0a] opacity-60 shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff6e]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-full flex-auto bg-stone-900">
        <main className="space-y-20 py-20 min-h-dvh h-full sm:space-y-32 sm:py-12">
          <article className="scroll-mt-16">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
              <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                  <div className="flex flex-col items-center gap-4">
                    <EventListView events={eventsRaw} isLoading={isLoading} />
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
              </div>
            </div>
          </article>
        </main>
      </section>
    </main>
  );
}
