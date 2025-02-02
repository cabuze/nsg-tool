/**
 * @description User create schema.
 */
export type UserCreateRequestType = {
  /**
   * @description The display name of the user.
   * @type string
   */
  display_name: string;
  /**
   * @description The email of the user.
   * @type string, email
   */
  email: string;
  /**
   * @description The password of the user.
   * @type string
   */
  password: string;
  /**
   * @description The is active status of the user.
   * @default true
   * @type boolean | undefined
   */
  is_active?: boolean;
  /**
   * @description The is staff status of the user.
   * @default false
   * @type boolean | undefined
   */
  is_staff?: boolean;
  /**
   * @description The is superuser status of the user.
   * @default false
   * @type boolean | undefined
   */
  is_superuser?: boolean;
};
