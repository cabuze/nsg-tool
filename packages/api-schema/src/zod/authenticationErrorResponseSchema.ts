import type { AuthenticationErrorResponseType } from "../ts/AuthenticationErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description Authentication error response class.
 */
export const authenticationErrorResponseSchema = z
  .object({
    type: z.literal("errors/authentication"),
    status: z.literal(401),
    path: z.string(),
    operation_id: z.string(),
  })
  .describe(
    "Authentication error response class.",
  ) as unknown as ToZod<AuthenticationErrorResponseType>;
