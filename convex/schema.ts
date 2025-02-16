import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  events: defineTable({
    blurb: v.string(),
    dateParsed: v.union(v.null(), v.string()),
    dateRaw: v.string(),
    isPublic: v.boolean(),
    modality: v.string(),
    notes: v.string(),
    organiser: v.string(),
    region: v.string(),
    ticketsUrl: v.string(),
    title: v.string(),
    venue: v.string(),
    year: v.union(v.null(), v.float64()),
  }),
});
