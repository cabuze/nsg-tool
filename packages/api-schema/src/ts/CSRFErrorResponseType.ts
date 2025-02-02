/**
 * @description CSRF error response class.
 */
export type CSRFErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/csrf";
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
};
