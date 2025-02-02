import type { LogoutResponseType } from "../ts/LogoutResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description Logout response schema.
 */
export const logoutResponseSchema = z
  .object({
    message: z
      .literal("Logout successful")
      .describe("The message of the logout response."),
  })
  .describe("Logout response schema.") as unknown as ToZod<LogoutResponseType>;
