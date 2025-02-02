import type { CheckConstraintErrorResponseType } from "../ts/CheckConstraintErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description CheckConstraint error response class.
 */
export const checkConstraintErrorResponseSchema = z
  .object({
    type: z.literal("errors/check-constraint"),
    status: z.literal(422),
    path: z.string(),
    operation_id: z.string(),
    resource: z.string(),
  })
  .describe(
    "CheckConstraint error response class.",
  ) as unknown as ToZod<CheckConstraintErrorResponseType>;
