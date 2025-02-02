import type { AuthorizationErrorResponseType } from "../ts/AuthorizationErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description Authorization error response class.
 */
export const authorizationErrorResponseSchema = z
  .object({
    type: z.literal("errors/authorization"),
    status: z.literal(403),
    path: z.string(),
    operation_id: z.string(),
    permissions: z.array(z.string()),
  })
  .describe(
    "Authorization error response class.",
  ) as unknown as ToZod<AuthorizationErrorResponseType>;
