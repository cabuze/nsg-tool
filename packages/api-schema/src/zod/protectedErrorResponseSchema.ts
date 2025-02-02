import type { ProtectedErrorResponseType } from "../ts/ProtectedErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description Protected error response class.
 */
export const protectedErrorResponseSchema = z
  .object({
    type: z.literal("errors/protection"),
    status: z.literal(422),
    path: z.string(),
    operation_id: z.string(),
    resource: z.string(),
    foreign_items: z.object({}).catchall(z.array(z.number().int())),
  })
  .describe(
    "Protected error response class.",
  ) as unknown as ToZod<ProtectedErrorResponseType>;
