import type { UserSortableFieldsEnumType } from "../ts/UserSortableFieldsEnumType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description User sortable fields enum.
 */
export const userSortableFieldsEnumSchema = z
  .enum([
    "email_asc",
    "email_desc",
    "display_name_asc",
    "display_name_desc",
    "created_at_asc",
    "created_at_desc",
  ])
  .describe(
    "User sortable fields enum.",
  ) as unknown as ToZod<UserSortableFieldsEnumType>;
