/**
 * @description CheckConstraint error response class.
 */
export type CheckConstraintErrorResponseType = {
  /**
   * @type string
   */
  type: "errors/check-constraint";
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
};
