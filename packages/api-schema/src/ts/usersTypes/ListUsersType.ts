import type { AuthenticationErrorResponseType } from "../AuthenticationErrorResponseType.ts";
import type { AuthorizationErrorResponseType } from "../AuthorizationErrorResponseType.ts";
import type { PagedUserResponseType } from "../PagedUserResponseType.ts";
import type { UserSortableFieldsEnumType } from "../UserSortableFieldsEnumType.ts";

export type ListUsersQueryParamsType = {
  /**
   * @description Filter by the email of the user.
   */
  email?: string | null;
  /**
   * @description Filter by the display name of the user.
   */
  display_name?: string | null;
  /**
   * @description Filter by the is active of the user.
   */
  is_active?: boolean | null;
  /**
   * @description Filter by the email or display name of the user.
   */
  search?: string | null;
  /**
   * @description Sort by email, display_name or timestamp of creation of the user.
   */
  ordering?: UserSortableFieldsEnumType[] | null;
  /**
   * @description The page number.
   * @minLength 1
   * @default 1
   * @type integer | undefined
   */
  page?: number;
  /**
   * @description The page size.
   * @minLength 1
   * @default 100
   * @type integer | undefined
   */
  page_size?: number;
};

/**
 * @description OK
 */
export type ListUsers200Type = PagedUserResponseType;

/**
 * @description Unauthorized
 */
export type ListUsers401Type = AuthenticationErrorResponseType;

/**
 * @description Forbidden
 */
export type ListUsers403Type = AuthorizationErrorResponseType;

export type ListUsersQueryResponseType = ListUsers200Type;

export type ListUsersTypeQuery = {
  Response: ListUsers200Type;
  QueryParams: ListUsersQueryParamsType;
  Errors: ListUsers401Type | ListUsers403Type;
};
