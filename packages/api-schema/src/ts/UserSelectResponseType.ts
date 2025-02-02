/**
 * @description User selection response schema.
 */
export type UserSelectResponseType = {
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
};
