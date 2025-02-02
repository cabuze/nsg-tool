/**
 * @description Invalid credentials error response.
 */
export type InvalidCredentialsErrorResponseType = {
  /**
   * @type string
   */
  type: string;
  /**
   * @type integer
   */
  status: 401;
  /**
   * @type string
   */
  path: string;
  /**
   * @type string
   */
  operation_id: string;
  /**
   * @type string
   */
  message: "Invalid credentials";
};
