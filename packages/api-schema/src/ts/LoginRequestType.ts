/**
 * @description Login request schema.
 */
export type LoginRequestType = {
  /**
   * @description The email of the user.
   * @type string
   */
  email: string;
  /**
   * @description The password of the user.
   * @type string
   */
  password: string;
};
