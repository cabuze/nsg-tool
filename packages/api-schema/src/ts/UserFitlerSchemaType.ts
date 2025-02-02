/**
 * @description User filter schema.
 */
export type UserFitlerSchemaType = {
  /**
   * @description Filter by the email of the user.
   */
  email?: string | null;
  /**
   * @description Filter by the display name of the user.
   */
  display_name?: string | null;
  /**
   * @description Filter by the is active of the user.
   */
  is_active?: boolean | null;
  /**
   * @description Filter by the email or display name of the user.
   */
  search?: string | null;
};
