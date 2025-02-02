import type { AuthenticationErrorResponseType } from "../AuthenticationErrorResponseType.ts";
import type { AuthorizationErrorResponseType } from "../AuthorizationErrorResponseType.ts";
import type { CheckConstraintErrorResponseType } from "../CheckConstraintErrorResponseType.ts";
import type { CSRFErrorResponseType } from "../CSRFErrorResponseType.ts";
import type { NotNullConstraintErrorResponseType } from "../NotNullConstraintErrorResponseType.ts";
import type { UniqueConstraintErrorResponseType } from "../UniqueConstraintErrorResponseType.ts";
import type { UserCreateRequestType } from "../UserCreateRequestType.ts";
import type { UserResponseType } from "../UserResponseType.ts";

/**
 * @description Created
 */
export type CreateUser201Type = UserResponseType;

/**
 * @description Unauthorized
 */
export type CreateUser401Type = AuthenticationErrorResponseType;

/**
 * @description Forbidden
 */
export type CreateUser403Type =
  | AuthorizationErrorResponseType
  | CSRFErrorResponseType;

/**
 * @description Unprocessable Entity
 */
export type CreateUser422Type =
  | CheckConstraintErrorResponseType
  | NotNullConstraintErrorResponseType
  | UniqueConstraintErrorResponseType;

export type CreateUserMutationRequestType = UserCreateRequestType;

export type CreateUserMutationResponseType = CreateUser201Type;

export type CreateUserTypeMutation = {
  Response: CreateUser201Type;
  Request: CreateUserMutationRequestType;
  Errors: CreateUser401Type | CreateUser403Type | CreateUser422Type;
};
