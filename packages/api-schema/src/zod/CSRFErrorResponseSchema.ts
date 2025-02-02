import type { CSRFErrorResponseType } from "../ts/CSRFErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description CSRF error response class.
 */
export const CSRFErrorResponseSchema = z
  .object({
    type: z.literal("errors/csrf"),
    status: z.literal(403),
    path: z.string(),
    operation_id: z.string(),
  })
  .describe(
    "CSRF error response class.",
  ) as unknown as ToZod<CSRFErrorResponseType>;
