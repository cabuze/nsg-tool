import type { MultipleObjectsReturnedErrorResponseType } from "../ts/MultipleObjectsReturnedErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description MultipleObjectsReturned error response class.
 */
export const multipleObjectsReturnedErrorResponseSchema = z
  .object({
    type: z.literal("errors/multiple-objects-returned"),
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
    "MultipleObjectsReturned error response class.",
  ) as unknown as ToZod<MultipleObjectsReturnedErrorResponseType>;
