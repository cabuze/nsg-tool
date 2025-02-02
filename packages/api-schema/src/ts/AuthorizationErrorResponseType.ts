/**
 * @description Authorization error response class.
 */
export type AuthorizationErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/authorization";
  /**
   * @type integer
   */
  status: 403;
  /**
   * @type string
   */
  path: string;
  /**
   * @type string
   */
  operation_id: string;
  /**
   * @type array
   */
  permissions: string[];
};
