/**
 * @description NotNullConstraint error response class.
 */
export type NotNullConstraintErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/not-null-constraint";
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
