import { dateToString, getDateInfo } from "@/lib/dates";
import { type Event as EventType } from "@/lib/types";
import { IconInfoCircle, IconTicket } from "@tabler/icons-react";
import { MapPinIcon, Tickets, ChevronRight } from "lucide-react";
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
    <div className="group relative lg:p-2">
      <div className="relative flex gap-8 rounded-xl bg-stone-900 p-8 text-stone-100 transition duration-300 overflow-clip group-hover:shadow-2xl isolate">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-transparent via-30% -z-10"></div>
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
              className="group relative isolate flex items-center gap-x-2 py-0.5 text-[0.8125rem]/6 font-medium transition-colors underline text-stone-400"
            >
              <MapPinIcon
                className="size-4 flex-none opacity-50"
                color="currentColor"
              />
              <span className="self-baseline text-xs">{props.venue}</span>
            </a>

            {/* Action Buttons */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center text-lime-500 gap-4">
                <AddToCalendarButton
                  title={props.title}
                  location={props.venue}
                  description={props.blurb}
                  dateInfo={dateInfo}
                  className="group/btn"
                />

                <a
                  href={props.ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn"
                >
                  <Tickets className="lucide -mt-1 lucide-ticket-check size-5 transition-colors group-hover/btn:text-lime-600" />
                </a>
              </div>

              <a
                href={`/events/${props.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-sm items-center gap-2  text-lime-500 rounded-lg transition  hover:underline"
              >
                More Info <ChevronRight className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
