import type { SystemDescriptionResponseType } from "../SystemDescriptionResponseType.ts";

/**
 * @description OK
 */
export type GetDescription200Type = SystemDescriptionResponseType;

export type GetDescriptionQueryResponseType = GetDescription200Type;

export type GetDescriptionTypeQuery = {
  Response: GetDescription200Type;
  Errors: any;
};
