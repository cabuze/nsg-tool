import type { UserSortSchemaType } from "../ts/UserSortSchemaType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { userSortableFieldsEnumSchema } from "./userSortableFieldsEnumSchema.ts";
import { z } from "zod";

/**
 * @description User sort schema.
 */
export const userSortSchemaSchema = z
  .object({
    ordering: z
      .union([z.array(z.lazy(() => userSortableFieldsEnumSchema)), z.null()])
      .describe(
        "Sort by email, display_name or timestamp of creation of the user.",
      )
      .optional(),
  })
  .describe("User sort schema.") as unknown as ToZod<UserSortSchemaType>;
