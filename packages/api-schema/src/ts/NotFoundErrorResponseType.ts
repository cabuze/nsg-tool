/**
 * @description NotFound error response class.
 */
export type NotFoundErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/not-found";
  /**
   * @type integer
   */
  status: 404;
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
  fields: {
    [key: string]: boolean | number | string | number | null;
  };
};
