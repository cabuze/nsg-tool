import type { UserFitlerSchemaType } from "../ts/UserFitlerSchemaType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description User filter schema.
 */
export const userFitlerSchemaSchema = z
  .object({
    email: z
      .union([z.string(), z.null()])
      .describe("Filter by the email of the user.")
      .optional(),
    display_name: z
      .union([z.string(), z.null()])
      .describe("Filter by the display name of the user.")
      .optional(),
    is_active: z
      .union([z.boolean(), z.null()])
      .describe("Filter by the is active of the user.")
      .optional(),
    search: z
      .union([z.string(), z.null()])
      .describe("Filter by the email or display name of the user.")
      .optional(),
  })
  .describe("User filter schema.") as unknown as ToZod<UserFitlerSchemaType>;
