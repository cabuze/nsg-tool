import type { InvalidCredentialsErrorResponseType } from "../ts/InvalidCredentialsErrorResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description Invalid credentials error response.
 */
export const invalidCredentialsErrorResponseSchema = z
  .object({
    type: z.string(),
    status: z.literal(401),
    path: z.string(),
    operation_id: z.string(),
    message: z.literal("Invalid credentials"),
  })
  .describe(
    "Invalid credentials error response.",
  ) as unknown as ToZod<InvalidCredentialsErrorResponseType>;
