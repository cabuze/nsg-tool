import type { AuthenticationErrorResponseType } from "../AuthenticationErrorResponseType.ts";
import type { AuthorizationErrorResponseType } from "../AuthorizationErrorResponseType.ts";
import type { MultipleObjectsReturnedErrorResponseType } from "../MultipleObjectsReturnedErrorResponseType.ts";
import type { NotFoundErrorResponseType } from "../NotFoundErrorResponseType.ts";
import type { UserResponseType } from "../UserResponseType.ts";

export type GetUserByIdPathParamsType = {
  /**
   * @type integer
   */
  id: number;
};

/**
 * @description OK
 */
export type GetUserById200Type = UserResponseType;

/**
 * @description Unauthorized
 */
export type GetUserById401Type = AuthenticationErrorResponseType;

/**
 * @description Forbidden
 */
export type GetUserById403Type = AuthorizationErrorResponseType;

/**
 * @description Not Found
 */
export type GetUserById404Type = NotFoundErrorResponseType;

/**
 * @description Unprocessable Entity
 */
export type GetUserById422Type = MultipleObjectsReturnedErrorResponseType;

export type GetUserByIdQueryResponseType = GetUserById200Type;

export type GetUserByIdTypeQuery = {
  Response: GetUserById200Type;
  PathParams: GetUserByIdPathParamsType;
  Errors:
    | GetUserById401Type
    | GetUserById403Type
    | GetUserById404Type
    | GetUserById422Type;
};
