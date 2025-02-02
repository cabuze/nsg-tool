import type { AuthenticationErrorResponseType } from "../AuthenticationErrorResponseType.ts";
import type { AuthorizationErrorResponseType } from "../AuthorizationErrorResponseType.ts";
import type { CheckConstraintErrorResponseType } from "../CheckConstraintErrorResponseType.ts";
import type { CSRFErrorResponseType } from "../CSRFErrorResponseType.ts";
import type { MultipleObjectsReturnedErrorResponseType } from "../MultipleObjectsReturnedErrorResponseType.ts";
import type { NotFoundErrorResponseType } from "../NotFoundErrorResponseType.ts";
import type { NotNullConstraintErrorResponseType } from "../NotNullConstraintErrorResponseType.ts";
import type { UniqueConstraintErrorResponseType } from "../UniqueConstraintErrorResponseType.ts";
import type { UserResponseType } from "../UserResponseType.ts";
import type { UserUpdateRequestType } from "../UserUpdateRequestType.ts";

export type UpdateUserPathParamsType = {
  /**
   * @type integer
   */
  id: number;
};

/**
 * @description OK
 */
export type UpdateUser200Type = UserResponseType;

/**
 * @description Unauthorized
 */
export type UpdateUser401Type = AuthenticationErrorResponseType;

/**
 * @description Forbidden
 */
export type UpdateUser403Type =
  | AuthorizationErrorResponseType
  | CSRFErrorResponseType;

/**
 * @description Not Found
 */
export type UpdateUser404Type = NotFoundErrorResponseType;

/**
 * @description Unprocessable Entity
 */
export type UpdateUser422Type =
  | MultipleObjectsReturnedErrorResponseType
  | CheckConstraintErrorResponseType
  | NotNullConstraintErrorResponseType
  | UniqueConstraintErrorResponseType;

export type UpdateUserMutationRequestType = UserUpdateRequestType;

export type UpdateUserMutationResponseType = UpdateUser200Type;

export type UpdateUserTypeMutation = {
  Response: UpdateUser200Type;
  Request: UpdateUserMutationRequestType;
  PathParams: UpdateUserPathParamsType;
  Errors:
    | UpdateUser401Type
    | UpdateUser403Type
    | UpdateUser404Type
    | UpdateUser422Type;
};
