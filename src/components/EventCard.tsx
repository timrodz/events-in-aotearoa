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
      <p className="uppercase">{dayName}</p>
      <p className="font-bold text-5xl">
        {day}
        {dayAbbreviation}
      </p>
      <p className="uppercase font-bold text-lg">{monthName}</p>
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
    <div className="bg-zinc-900/50 rounded-xl p-1 shadow-md">
      <div className="rounded-lg border-2 bg-zinc-800 p-4 border-zinc-500 border-b-4 border-b-[#7fcc03]">
        <div className="flex gap-4">
          <div>
            {props.dateParsed ? (
              <DateText date={props.dateParsed} />
            ) : (
              <p>{date}</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="min-h-24">
              <h3 className="font-bold text-white mb-2">{props.title}</h3>
              <p className="line-clamp-3 text-white">{description}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="inline-block">
                <MapPinIcon className="inline" color="white" />
                <p className="ml-1 text-white inline">{props.venue}</p>
              </div>
              <div className="flex gap-2 justify-center">
                <AddToCalendarButton
                  title={props.title}
                  location={props.venue}
                  description={props.blurb}
                  dateInfo={dateInfo}
                />
                <a
                  href={props.ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTicket color="white" />
                </a>
                <a
                  href={`/events/${props.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconInfoCircle color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
