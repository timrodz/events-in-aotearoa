import xlsx from "node-xlsx";
import fs from "fs";
import { getDateMetadataFromString, parseDate } from "./dates";

const file = fs.readFileSync(`${__dirname}/events.xlsx`);
const sheets = xlsx.parse(file, { range: "A3:I100" });

const columns = [
  "Date and time",
  "Event title",
  "Blurb (keep it short and sweet)",
  "In person/Online",
  "Organiser details",
  "Region",
  "Venue",
  "Tickets link",
  "Notes",
];

const columns2024 = [
  "Date and time",
  "Region",
  "Event title",
  "Blurb (keep it short and sweet)",
  "In person/Online",
  "Organiser details",
  "Venue",
  "Tickets link",
  "Notes",
];

const columns2025 = [
  "Date and time",
  "Region",
  "Event title",
  "Blurb (keep it short and sweet)",
  "In person/Online",
  "Organiser details",
  "Venue",
  "Tickets link",
  "Notes",
];

const getColumns = (year: string) => {
  switch (year) {
    case "2024":
      return columns2024;
    case "2025":
      return columns2025;
    default:
      return columns;
  }
};

function parseModality(modality: string) {
  switch (modality) {
    case "In person":
    case "In Person":
      return "in_person";
    case "Online":
      return "online";
    case "Hybrid":
      return "hybrid";
    default:
      return "in_person";
  }
}

function getDateParsed(year: number, value: string) {
  const dateMetadata = getDateMetadataFromString(value.toString());
  if (dateMetadata) {
    const parsed = parseDate(dateMetadata);
    if (parsed) {
      parsed.setFullYear(year);
      return parsed;
    }
  }
  return null;
}

const finalData: unknown[] = [];

for (const { name, data: d } of sheets) {
  const rawData = d.slice(1).filter((d) => d.length > 0);

  const year = name.match(/\d{2,4}$/)?.[0] ?? "";
  const fullYear = year.length === 2 ? `20${year}` : year;

  const cols = getColumns(fullYear);

  const typedData = rawData.map((entry) => {
    const obj: Record<string, string> = {};
    cols.forEach((col, index) => {
      obj[col] = entry[index] || "";
    });
    return obj;
  });

  const parsedYear = parseInt(fullYear);

  const mappedData = typedData.flatMap((d) => ({
    year: parsedYear,
    dateRaw: d["Date and time"],
    title: d["Event title"],
    blurb: d["Blurb (keep it short and sweet)"],
    modality: parseModality(d["In person/Online"] ?? ""),
    organiser: d["Organiser details"],
    region: d["Region"],
    venue: d["Venue"],
    ticketsUrl: d["Tickets link"],
    notes: d["Notes"],
    isPublic: true,
    dateParsed: getDateParsed(parsedYear, d["Date and time"] ?? ""),
  }));

  const cleanData = mappedData.filter(
    (d) =>
      typeof d.dateRaw === "string" ||
      (!d.title && !d.blurb && !d.organiser && !d.region && !d.venue),
  );

  finalData.push(...cleanData);
}

fs.writeFileSync(
  `${__dirname}/events-${new Date().toISOString()}.json`,
  JSON.stringify(finalData),
);
