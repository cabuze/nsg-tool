export const userSortableFieldsEnumEnum = {
  email_asc: "email_asc",
  email_desc: "email_desc",
  display_name_asc: "display_name_asc",
  display_name_desc: "display_name_desc",
  created_at_asc: "created_at_asc",
  created_at_desc: "created_at_desc",
} as const;

export type UserSortableFieldsEnumEnumType =
  (typeof userSortableFieldsEnumEnum)[keyof typeof userSortableFieldsEnumEnum];

/**
 * @description User sortable fields enum.
 */
export type UserSortableFieldsEnumType = UserSortableFieldsEnumEnumType;
