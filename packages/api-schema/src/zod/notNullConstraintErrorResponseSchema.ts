import type { NotNullConstraintErrorResponseType } from "../ts/NotNullConstraintErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description NotNullConstraint error response class.
 */
export const notNullConstraintErrorResponseSchema = z
  .object({
    type: z.literal("errors/not-null-constraint"),
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
    "NotNullConstraint error response class.",
  ) as unknown as ToZod<NotNullConstraintErrorResponseType>;
