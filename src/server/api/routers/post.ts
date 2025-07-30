import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { z } from "zod";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return "";
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    return "";
  }),
});
