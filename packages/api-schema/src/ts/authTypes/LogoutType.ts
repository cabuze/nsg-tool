import type { AuthenticationErrorResponseType } from "../AuthenticationErrorResponseType.ts";
import type { AuthorizationErrorResponseType } from "../AuthorizationErrorResponseType.ts";
import type { CSRFErrorResponseType } from "../CSRFErrorResponseType.ts";
import type { LogoutResponseType } from "../LogoutResponseType.ts";

/**
 * @description OK
 */
export type Logout200Type = LogoutResponseType;

/**
 * @description Unauthorized
 */
export type Logout401Type = AuthenticationErrorResponseType;

/**
 * @description Forbidden
 */
export type Logout403Type =
  | AuthorizationErrorResponseType
  | CSRFErrorResponseType;

export type LogoutMutationResponseType = Logout200Type;

export type LogoutTypeMutation = {
  Response: Logout200Type;
  Errors: Logout401Type | Logout403Type;
};
