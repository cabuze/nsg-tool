import type { SystemVersionResponseType } from "../SystemVersionResponseType.ts";

/**
 * @description OK
 */
export type GetVersion200Type = SystemVersionResponseType;

export type GetVersionQueryResponseType = GetVersion200Type;

export type GetVersionTypeQuery = {
  Response: GetVersion200Type;
  Errors: any;
};
