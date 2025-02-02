import type { AuthenticationErrorResponseType } from "../AuthenticationErrorResponseType.ts";
import type { AuthorizationErrorResponseType } from "../AuthorizationErrorResponseType.ts";
import type { MeResponseType } from "../MeResponseType.ts";

/**
 * @description OK
 */
export type Me200Type = MeResponseType;

/**
 * @description Unauthorized
 */
export type Me401Type = AuthenticationErrorResponseType;

/**
 * @description Forbidden
 */
export type Me403Type = AuthorizationErrorResponseType;

export type MeQueryResponseType = Me200Type;

export type MeTypeQuery = {
  Response: Me200Type;
  Errors: Me401Type | Me403Type;
};
