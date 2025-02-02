import type { AuthenticationErrorResponseType } from "../AuthenticationErrorResponseType.ts";
import type { AuthorizationErrorResponseType } from "../AuthorizationErrorResponseType.ts";
import type { UserSelectResponseType } from "../UserSelectResponseType.ts";

/**
 * @description OK
 */
export type SelectUser200Type = UserSelectResponseType[];

/**
 * @description Unauthorized
 */
export type SelectUser401Type = AuthenticationErrorResponseType;

/**
 * @description Forbidden
 */
export type SelectUser403Type = AuthorizationErrorResponseType;

export type SelectUserQueryResponseType = SelectUser200Type;

export type SelectUserTypeQuery = {
  Response: SelectUser200Type;
  Errors: SelectUser401Type | SelectUser403Type;
};
