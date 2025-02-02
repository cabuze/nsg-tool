/**
 * @description User response schema.
 */
export type UserResponseType = {
  /**
   * @description The id of the user.
   * @type integer
   */
  id: number;
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
   * @description The is active status of the user.
   * @type boolean
   */
  is_active: boolean;
  /**
   * @description The is staff status of the user.
   * @type boolean
   */
  is_staff: boolean;
  /**
   * @description The is superuser status of the user.
   * @type boolean
   */
  is_superuser: boolean;
  /**
   * @description The the timestamp of the last login of the user.
   */
  last_login: string | null;
  /**
   * @description The timestamp of creation of the user.
   * @type string, date-time
   */
  created_at: string;
  /**
   * @description The timestamp of the last update of the user.
   * @type string, date-time
   */
  updated_at: string;
};
