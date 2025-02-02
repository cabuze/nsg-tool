import type { AuthenticationErrorResponseType } from "../AuthenticationErrorResponseType.ts";
import type { AuthorizationErrorResponseType } from "../AuthorizationErrorResponseType.ts";
import type { CSRFErrorResponseType } from "../CSRFErrorResponseType.ts";
import type { MultipleObjectsReturnedErrorResponseType } from "../MultipleObjectsReturnedErrorResponseType.ts";
import type { NotFoundErrorResponseType } from "../NotFoundErrorResponseType.ts";
import type { ProtectedErrorResponseType } from "../ProtectedErrorResponseType.ts";
import type { UserDeleteResponseType } from "../UserDeleteResponseType.ts";

export type DeleteUserPathParamsType = {
  /**
   * @type integer
   */
  id: number;
};

/**
 * @description No Content
 */
export type DeleteUser204Type = UserDeleteResponseType;

/**
 * @description Unauthorized
 */
export type DeleteUser401Type = AuthenticationErrorResponseType;

/**
 * @description Forbidden
 */
export type DeleteUser403Type =
  | AuthorizationErrorResponseType
  | CSRFErrorResponseType;

/**
 * @description Not Found
 */
export type DeleteUser404Type = NotFoundErrorResponseType;

/**
 * @description Unprocessable Entity
 */
export type DeleteUser422Type =
  | MultipleObjectsReturnedErrorResponseType
  | ProtectedErrorResponseType;

export type DeleteUserMutationResponseType = DeleteUser204Type;

export type DeleteUserTypeMutation = {
  Response: DeleteUser204Type;
  PathParams: DeleteUserPathParamsType;
  Errors:
    | DeleteUser401Type
    | DeleteUser403Type
    | DeleteUser404Type
    | DeleteUser422Type;
};
