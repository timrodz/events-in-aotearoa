import { dateToString, getDateInfo } from "@/lib/dates";
import { type Event as EventType } from "@/lib/types";
import { IconInfoCircle, IconTicket } from "@tabler/icons-react";
import { MapPinIcon } from "lucide-react";
import { AddToCalendarButton } from "./AddToCalendarButton";

type Props = EventType;

const DateText = ({ date }: { date: Date }) => {
  const { time, dayName, day, monthName } = getDateInfo(date);

  let dayAbbreviation = "th";
  switch (day) {
    case "1":
    case "21":
    case "31":
      dayAbbreviation = "st";
      break;
    case "2":
    case "22":
      dayAbbreviation = "nd";
      break;
    case "3":
    case "23":
      dayAbbreviation = "rd";
      break;
    default:
      dayAbbreviation = "th";
      break;
  }

  return (
    <div className="text-white">
      <p className="text-[0.70rem] uppercase ">{dayName}</p>
      <p className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-white to-stone-500 text-transparent bg-clip-text">
        {day}
        {dayAbbreviation}
      </p>
      <p className="text-[0.80rem] tracking-tighter">{monthName}</p>
      {time && <p className="uppercase">{time}</p>}
    </div>
  );
};

export const EventCard = (props: Props) => {
  const description = props.blurb;
  const date = props.dateParsed
    ? dateToString(props.dateParsed)
    : props.dateRaw;

  const dateInfo = props.dateParsed ? getDateInfo(props.dateParsed) : undefined;

  return (
    <div className="group relative rounded-2xl border border-white/5 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:rounded-3xl lg:p-2">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
        }}
      ></div>
      <div className="relative flex gap-8  rounded-xl bg-stone-900 p-6 text-stone-100 ring-1 shadow-md ring-stone-800 transition duration-300 group-hover:bg-stone-800 group-hover:shadow">
        <span className="absolute bottom-0 left-0 z-10 rounded-b-2xl h-1 w-0 bg-lime-500 duration-400 group-hover:w-full group-hover:transition-all"></span>

        {/* Date Section */}
        <div className="flex flex-col gap-1">
          {props.dateParsed ? (
            <DateText date={props.dateParsed} />
          ) : (
            <p>{date}</p>
          )}
        </div>

        {/* Event Details Section */}
        <div className="flex flex-col space-y-1.5">
          <h2 className="leading-none font-semibold tracking-tight">
            {props.title}
          </h2>
          <p className="text-sm line-clamp-3 text-stone-400">{description}</p>

          <div className="mt-2 flex flex-col flex-wrap justify-between gap-x-1 gap-y-3 sm:gap-x-2">
            {/* Location */}
            <a
              href="#"
              className="group relative isolate flex items-center gap-x-2 py-0.5 text-[0.8125rem]/6 font-medium transition-colors hover:text-lime-300"
            >
              <MapPinIcon
                className="size-4 flex-none opacity-50"
                color="currentColor"
              />
              <span className="self-baseline text-xs">{props.venue}</span>
            </a>

            {/* Action Buttons */}
            <div className="flex items-center z-10 gap-4">
              <AddToCalendarButton
                title={props.title}
                location={props.venue}
                description={props.blurb}
                dateInfo={dateInfo}
                className="group/btn"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar-plus size-5 transition-colors group-hover/btn:text-lime-500"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                    <path d="M3 10h18" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                  </svg>
                }
              />

              <a
                href={props.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-ticket-check size-5 transition-colors group-hover/btn:text-lime-500"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </a>

              <a
                href={`/events/${props.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn"
              >
                <IconInfoCircle
                  color="white"
                  className="size-5 transition-colors group-hover/btn:text-lime-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
