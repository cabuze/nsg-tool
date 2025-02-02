import type { UserSelectResponseType } from "../ts/UserSelectResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description User selection response schema.
 */
export const userSelectResponseSchema = z
  .object({
    id: z.number().int().describe("The id of the user."),
    display_name: z.string().describe("The display name of the user."),
    email: z.string().email().describe("The email of the user."),
  })
  .describe(
    "User selection response schema.",
  ) as unknown as ToZod<UserSelectResponseType>;
