/**
 * @description UniqueConstraint error response class.
 */
export type UniqueConstraintErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/unique-constraint";
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
