import type { CSRFErrorResponseType } from "../CSRFErrorResponseType.ts";
import type { InvalidCredentialsErrorResponseType } from "../InvalidCredentialsErrorResponseType.ts";
import type { LoginRequestType } from "../LoginRequestType.ts";
import type { LoginResponseType } from "../LoginResponseType.ts";

/**
 * @description OK
 */
export type Login200Type = LoginResponseType;

/**
 * @description Unauthorized
 */
export type Login401Type = InvalidCredentialsErrorResponseType;

/**
 * @description Forbidden
 */
export type Login403Type = CSRFErrorResponseType;

export type LoginMutationRequestType = LoginRequestType;

export type LoginMutationResponseType = Login200Type;

export type LoginTypeMutation = {
  Response: Login200Type;
  Request: LoginMutationRequestType;
  Errors: Login401Type | Login403Type;
};
