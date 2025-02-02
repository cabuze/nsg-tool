import type { UserUpdateRequestType } from "../ts/UserUpdateRequestType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description User update schema.
 */
export const userUpdateRequestSchema = z
  .object({
    display_name: z
      .union([z.string(), z.null()])
      .describe("The display name of the user.")
      .optional(),
    email: z
      .union([z.string().email(), z.null()])
      .describe("The email of the user.")
      .optional(),
    password: z
      .union([z.string(), z.null()])
      .describe("The password of the user.")
      .optional(),
    is_active: z
      .union([z.boolean(), z.null()])
      .describe("The is active status of the user.")
      .optional(),
    is_staff: z
      .union([z.boolean(), z.null()])
      .describe("The is staff status of the user.")
      .optional(),
    is_superuser: z
      .union([z.boolean(), z.null()])
      .describe("The is superuser status of the user.")
      .optional(),
  })
  .describe("User update schema.") as unknown as ToZod<UserUpdateRequestType>;
