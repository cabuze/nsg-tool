import type { NotFoundErrorResponseType } from "../ts/NotFoundErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description NotFound error response class.
 */
export const notFoundErrorResponseSchema = z
  .object({
    type: z.literal("errors/not-found"),
    status: z.literal(404),
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
    "NotFound error response class.",
  ) as unknown as ToZod<NotFoundErrorResponseType>;
