/**
 * @description MultipleObjectsReturned error response class.
 */
export type MultipleObjectsReturnedErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/multiple-objects-returned";
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
  fields: {
    [key: string]: boolean | number | string | number | null;
  };
};
