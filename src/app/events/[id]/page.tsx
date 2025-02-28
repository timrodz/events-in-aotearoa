import { EventDetailedView } from "@/components/EventDetailedView";

export default async function EventDetailedViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <main className="p-8 flex flex-col gap-16">
      <EventDetailedView id={id} />
    </main>
  );
}
