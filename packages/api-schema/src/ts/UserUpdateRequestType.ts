/**
 * @description User update schema.
 */
export type UserUpdateRequestType = {
  /**
   * @description The display name of the user.
   */
  display_name?: string | null;
  /**
   * @description The email of the user.
   */
  email?: string | null;
  /**
   * @description The password of the user.
   */
  password?: string | null;
  /**
   * @description The is active status of the user.
   */
  is_active?: boolean | null;
  /**
   * @description The is staff status of the user.
   */
  is_staff?: boolean | null;
  /**
   * @description The is superuser status of the user.
   */
  is_superuser?: boolean | null;
};
