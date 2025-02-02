import type { UserResponseType } from "../ts/UserResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description User response schema.
 */
export const userResponseSchema = z
  .object({
    id: z.number().int().describe("The id of the user."),
    display_name: z.string().describe("The display name of the user."),
    email: z.string().email().describe("The email of the user."),
    is_active: z.boolean().describe("The is active status of the user."),
    is_staff: z.boolean().describe("The is staff status of the user."),
    is_superuser: z.boolean().describe("The is superuser status of the user."),
    last_login: z
      .union([z.string().datetime({ offset: true }), z.null()])
      .describe("The the timestamp of the last login of the user."),
    created_at: z
      .string()
      .datetime({ offset: true })
      .describe("The timestamp of creation of the user."),
    updated_at: z
      .string()
      .datetime({ offset: true })
      .describe("The timestamp of the last update of the user."),
  })
  .describe("User response schema.") as unknown as ToZod<UserResponseType>;
