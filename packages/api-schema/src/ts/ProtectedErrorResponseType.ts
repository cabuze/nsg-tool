/**
 * @description Protected error response class.
 */
export type ProtectedErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/protection";
  /**
   * @type integer
   */
  status: 422;
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
  resource: string;
  /**
   * @type object
   */
  foreign_items: {
    [key: string]: number[];
  };
};
