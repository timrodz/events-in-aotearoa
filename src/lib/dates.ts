import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export function ISOtoDate(dateString: string): string {
  return dayjs(dateString).tz("UTC").format("DD/MM/YYYY");
}

export function parseDate(raw: string, parsed: string | undefined) {
  if (parsed) {
    return dayjs(parsed).tz("UTC").format("DD/MM/YYYY");
  }

  return raw;
}
