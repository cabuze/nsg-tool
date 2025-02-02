import type { UniqueConstraintErrorResponseType } from "../ts/UniqueConstraintErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description UniqueConstraint error response class.
 */
export const uniqueConstraintErrorResponseSchema = z
  .object({
    type: z.literal("errors/unique-constraint"),
    status: z.literal(422),
    path: z.string(),
    operation_id: z.string(),
    resource: z.string(),
    fields: z
      .object({})
      .catchall(
        z.union([
          z.boolean(),
          z.number().int(),
          z.string(),
          z.number(),
          z.null(),
        ]),
      ),
  })
  .describe(
    "UniqueConstraint error response class.",
  ) as unknown as ToZod<UniqueConstraintErrorResponseType>;
