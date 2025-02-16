"use client";

import { EventsViewer } from "@/components/EventsViewer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center">
        Events in Aotearoa
      </header>
      <main className="p-8 flex flex-col gap-16">
        <div className="flex items-center justify-center">
          <Image src="/kiwi.svg" alt="Kiwi" width={64} height={64} />
          <h1 className="text-4xl font-bold text-center">Events in Aotearoa</h1>
        </div>
        <Content />
      </main>
    </>
  );
}

function Content() {
  return (
    <div className="flex flex-col gap-8 max-w-lg mx-auto">
      <EventsViewer />
    </div>
  );
}
