import type { UserSortableFieldsEnumType } from "./UserSortableFieldsEnumType.ts";

/**
 * @description User sort schema.
 */
export type UserSortSchemaType = {
  /**
   * @description Sort by email, display_name or timestamp of creation of the user.
   */
  ordering?: UserSortableFieldsEnumType[] | null;
};
