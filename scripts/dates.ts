import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

const tz = "UTC";

type DateMetadata = {
  day: string | null;
  month: string | null;
  time: string | null;
};

export function parseDate(
  metadata: DateMetadata | undefined,
): Date | undefined {
  if (!metadata) {
    return undefined;
  }
  const { day, month, time } = metadata;
  if (!day && !month && !time) {
    return undefined;
  }

  const formats = ["D MMM h:ma", "D MMM h:m a", "D MMM ha", "D MMM h a"];
  for (const format of formats) {
    const d = dayjs(`${day} ${month} ${time}`, format).tz(tz);
    if (d.isValid()) {
      return d.toDate();
    }
  }

  if (dayjs(`${day} ${month}`, "D MMM").isValid()) {
    return dayjs(`${day} ${month}`, "D MMM").toDate();
  }
  return undefined;
}

export function getDateMetadataFromString(dateString: string):
  | {
      day: string | null;
      month: string | null;
      time: string | null;
    }
  | undefined {
  // Pattern for time
  const TIME_PATTERN = /(\d+):?(\d*)\s*([ap]m)/i;
  // Find time separately
  const timeMatch = dateString.toLowerCase().match(TIME_PATTERN);
  const time = timeMatch ? timeMatch[0] : null;

  // Patterns for different date formats
  const PATTERNS = [
    /(\w+)\s+(\d+)[a-z]+\s+(\w+),\s+(\d+):?(\d*)\s*([ap]m)/i, // Tue 4th Feb, 6pm
    /(\d+)-(\d+)\s+(\w+)/, // 17-18 Feb
    /(\w+)\s+(\d+)[a-z]+\s+(\w+)/, // Fri 16th May
    /(\w+)\s+(\d+)[a-z]+\s+(\w+)\s+(\d+)\s*([ap]m)\s*-\s*(\d+)\s*([ap]m)/i, // Wed 2nd Nov 10 am - 12 pm
    /(\d+)\s+(\w+)\s*-\s*(\d+):(\d+)([ap]m)/i, // 22 feb - 7:30pm
    /(\d+)\s+(\w+)\s*-\s*(\d+)\s*([ap]m)/i, // 23 Feb - 7pm
  ];

  for (const pattern of PATTERNS) {
    const matches = dateString.toLowerCase().match(pattern);
    if (matches) {
      let day;
      let month;

      const match = matches[0];

      // Extract month and date based on pattern
      if (match.match(PATTERNS[0])) {
        // Tue 4th Feb, 6pm
        day = matches[2];
        month = matches[3];
      } else if (match.match(PATTERNS[1])) {
        // 17-18 Feb
        day = matches[1];
        month = matches[3];
      } else if (match.match(PATTERNS[2])) {
        // Fri 16th May
        day = matches[2];
        month = matches[3];
      } else if (match.match(PATTERNS[3])) {
        // Wed 2nd Nov 10 am - 12 pm
        day = matches[2];
        month = matches[3];
      } else if (match.match(PATTERNS[4])) {
        // 22 feb - 7:30pm
        day = matches[1];
        month = matches[2];
      } else if (match.match(PATTERNS[5])) {
        // 22 feb - 7
        day = matches[1];
        month = matches[2];
      }

      // Capitalize first letter of month
      if (month) {
        month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
      }

      const res = {
        day: day || null,
        month: month?.substring(0, 3) || null,
        time,
      };
      return res;
    }
  }

  return undefined;
}

// console.log(parseDate(getDateMetadataFromString("Tue 4th Feb, 6pm")));
// console.log(parseDate(getDateMetadataFromString("Tue 4th Feb, 6:30pm")));
// console.log(parseDate(getDateMetadataFromString("17-18 Feb")));
// console.log(parseDate(getDateMetadataFromString("15-17 March")));
// console.log(parseDate(getDateMetadataFromString("7 - 12 April")));
// console.log(parseDate(getDateMetadataFromString("18 - 19 May")));
// console.log(parseDate(getDateMetadataFromString("Thu, 7 April 2022")));
// console.log(parseDate(getDateMetadataFromString("18 - 19 May")));
// console.log(parseDate(getDateMetadataFromString("17-18 Feb 6pm")));
// console.log(parseDate(getDateMetadataFromString("17-18 Feb 6:30pm")));
// console.log(parseDate(getDateMetadataFromString("Fri 16th May")));
// console.log(parseDate(getDateMetadataFromString("Fri 16th May 6pm")));
// console.log(parseDate(getDateMetadataFromString("Fri 16th May 6:30")));
// console.log(parseDate(getDateMetadataFromString("Wed 2nd Nov 10 am - 12 pm")));
// console.log(parseDate(getDateMetadataFromString("22 feb - 7:30pm")));
// console.log(parseDate(getDateMetadataFromString("23 Feb - 7pm")));

// console.log(
//   parseDate(
//     getDateMetadataFromString("Wednesday 9th March, 2022 7:30am-8:30am")
//   )
// );
