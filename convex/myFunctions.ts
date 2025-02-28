import { v } from "convex/values";
import { query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

// Write your Convex  in any file inside this directory (`convex`).
// See https://docs.convex.dev/functions for more.

export const listEvents = query({
  args: {
    paginationOpts: paginationOptsValidator,
  },

  handler: async (ctx, args) => {
    const events = await ctx.db
      .query("events")
      .order("desc")
      .paginate(args.paginationOpts);
    return {
      ...events,
    };
  },
});

export const getEventById = query({
  args: {
    id: v.id("events"),
  },

  handler: async (ctx, args) => {
    const event = await ctx.db
      .query("events")
      .withIndex("by_id", (q) => q.eq("_id", args.id))
      .unique();
    return {
      event,
    };
  },
});
