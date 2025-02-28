import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DateInfo } from "./types";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export function ISOtoDateString(dateString: string): string {
  return dayjs(dateString).tz("UTC").format("DD/MM/YYYY");
}

export function parseDateToString(
  raw: string,
  parsed: string | undefined,
): string {
  if (parsed) {
    return dayjs(parsed).tz("UTC").format("DD/MM/YYYY");
  }

  return raw;
}

export function parseDate(raw: string): Date {
  return dayjs(raw).tz("UTC").toDate();
}

export function dateToString(date: Date): string {
  return dayjs(date).tz("UTC").format("DD/MM/YYYY");
}

export function getDateInfo(date: Date): DateInfo {
  // https://day.js.org/docs/en/display/format
  const dayjsDate = dayjs(date);

  // A date with no set time will default to 12:00 AM
  const time = dayjsDate.format("h:mm A");

  const dayName = dayjsDate.format("ddd");
  const day = dayjsDate.format("DD");
  const monthName = dayjsDate.format("MMMM");

  const isTimeValid = time !== "12:00 AM";
  const startDate = isTimeValid
    ? dayjsDate.format("YYYY-MM-DD HH:mm:ss Z")
    : dayjsDate.format("YYYY-MM-DD");

  return {
    time: isTimeValid ? time : null,
    dayName,
    day,
    monthName,
    startDate,
  };
}
