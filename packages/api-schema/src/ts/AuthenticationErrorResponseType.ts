/**
 * @description Authentication error response class.
 */
export type AuthenticationErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/authentication";
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
};
