import type { UserCreateRequestType } from "../ts/UserCreateRequestType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description User create schema.
 */
export const userCreateRequestSchema = z
  .object({
    display_name: z.string().describe("The display name of the user."),
    email: z.string().email().describe("The email of the user."),
    password: z.string().describe("The password of the user."),
    is_active: z
      .boolean()
      .default(true)
      .describe("The is active status of the user."),
    is_staff: z
      .boolean()
      .default(false)
      .describe("The is staff status of the user."),
    is_superuser: z
      .boolean()
      .default(false)
      .describe("The is superuser status of the user."),
  })
  .describe("User create schema.") as unknown as ToZod<UserCreateRequestType>;
