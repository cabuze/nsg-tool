import client from "@kubb/plugin-client/clients/axios";
import type { GetCSRFTokenMutationResponseType } from "./ts/authTypes/GetCSRFTokenType.ts";
import type {
  LoginMutationRequestType,
  LoginMutationResponseType,
  Login401Type,
  Login403Type,
} from "./ts/authTypes/LoginType.ts";
import type {
  LogoutMutationResponseType,
  Logout401Type,
  Logout403Type,
} from "./ts/authTypes/LogoutType.ts";
import type {
  MeQueryResponseType,
  Me401Type,
  Me403Type,
} from "./ts/authTypes/MeType.ts";
import type { GetDescriptionQueryResponseType } from "./ts/systemTypes/GetDescriptionType.ts";
import type { GetVersionQueryResponseType } from "./ts/systemTypes/GetVersionType.ts";
import type {
  CreateUserMutationRequestType,
  CreateUserMutationResponseType,
  CreateUser401Type,
  CreateUser403Type,
  CreateUser422Type,
} from "./ts/usersTypes/CreateUserType.ts";
import type {
  DeleteUserMutationResponseType,
  DeleteUserPathParamsType,
  DeleteUser401Type,
  DeleteUser403Type,
  DeleteUser404Type,
  DeleteUser422Type,
} from "./ts/usersTypes/DeleteUserType.ts";
import type {
  GetUserByIdQueryResponseType,
  GetUserByIdPathParamsType,
  GetUserById401Type,
  GetUserById403Type,
  GetUserById404Type,
  GetUserById422Type,
} from "./ts/usersTypes/GetUserByIdType.ts";
import type {
  ListUsersQueryResponseType,
  ListUsersQueryParamsType,
  ListUsers401Type,
  ListUsers403Type,
} from "./ts/usersTypes/ListUsersType.ts";
import type {
  SelectUserQueryResponseType,
  SelectUser401Type,
  SelectUser403Type,
} from "./ts/usersTypes/SelectUserType.ts";
import type {
  UpdateUserMutationRequestType,
  UpdateUserMutationResponseType,
  UpdateUserPathParamsType,
  UpdateUser401Type,
  UpdateUser403Type,
  UpdateUser404Type,
  UpdateUser422Type,
} from "./ts/usersTypes/UpdateUserType.ts";
import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/axios";
import { getCSRFTokenMutationResponseSchema } from "./zod/authSchemas/getCSRFTokenSchema.ts";
import { loginMutationResponseSchema } from "./zod/authSchemas/loginSchema.ts";
import { logoutMutationResponseSchema } from "./zod/authSchemas/logoutSchema.ts";
import { meQueryResponseSchema } from "./zod/authSchemas/meSchema.ts";
import { getDescriptionQueryResponseSchema } from "./zod/systemSchemas/getDescriptionSchema.ts";
import { getVersionQueryResponseSchema } from "./zod/systemSchemas/getVersionSchema.ts";
import { createUserMutationResponseSchema } from "./zod/usersSchemas/createUserSchema.ts";
import { deleteUserMutationResponseSchema } from "./zod/usersSchemas/deleteUserSchema.ts";
import { getUserByIdQueryResponseSchema } from "./zod/usersSchemas/getUserByIdSchema.ts";
import { listUsersQueryResponseSchema } from "./zod/usersSchemas/listUsersSchema.ts";
import { selectUserQueryResponseSchema } from "./zod/usersSchemas/selectUserSchema.ts";
import { updateUserMutationResponseSchema } from "./zod/usersSchemas/updateUserSchema.ts";

export function getGetCSRFTokenUrl() {
  return `/api/auth/csrf` as const;
}

/**
 * @description Get CSRF token route handler.
 * @summary Get CSRF token
 * {@link /api/auth/csrf}
 */
export async function getCSRFToken(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetCSRFTokenMutationResponseType,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "POST",
    url: getGetCSRFTokenUrl().toString(),
    ...requestConfig,
  });
  return getCSRFTokenMutationResponseSchema.parse(res.data);
}

export function getLoginUrl() {
  return `/api/auth/login` as const;
}

/**
 * @description Login an user route handler.
 * @summary Login an user
 * {@link /api/auth/login}
 */
export async function login(
  data: LoginMutationRequestType,
  config: Partial<RequestConfig<LoginMutationRequestType>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    LoginMutationResponseType,
    ResponseErrorConfig<Login401Type | Login403Type>,
    LoginMutationRequestType
  >({
    method: "POST",
    url: getLoginUrl().toString(),
    data,
    ...requestConfig,
  });
  return loginMutationResponseSchema.parse(res.data);
}

export function getLogoutUrl() {
  return `/api/auth/logout` as const;
}

/**
 * @description Logout an user route handler.
 * @summary Logout a user
 * {@link /api/auth/logout}
 */
export async function logout(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    LogoutMutationResponseType,
    ResponseErrorConfig<Logout401Type | Logout403Type>,
    unknown
  >({
    method: "POST",
    url: getLogoutUrl().toString(),
    ...requestConfig,
  });
  return logoutMutationResponseSchema.parse(res.data);
}

export function getMeUrl() {
  return `/api/auth/me` as const;
}

/**
 * @description Get logged in user route handler.
 * @summary Get the logged in user
 * {@link /api/auth/me}
 */
export async function me(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MeQueryResponseType,
    ResponseErrorConfig<Me401Type | Me403Type>,
    unknown
  >({
    method: "GET",
    url: getMeUrl().toString(),
    ...requestConfig,
  });
  return meQueryResponseSchema.parse(res.data);
}

export function getListUsersUrl() {
  return `/api/users` as const;
}

/**
 * @description List users route handler.
 * @summary List users
 * {@link /api/users}
 */
export async function listUsers(
  params?: ListUsersQueryParamsType,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListUsersQueryResponseType,
    ResponseErrorConfig<ListUsers401Type | ListUsers403Type>,
    unknown
  >({
    method: "GET",
    url: getListUsersUrl().toString(),
    params,
    ...requestConfig,
  });
  return listUsersQueryResponseSchema.parse(res.data);
}

export function getSelectUserUrl() {
  return `/api/users/selection` as const;
}

/**
 * @description List users route handler.
 * @summary User selection list
 * {@link /api/users/selection}
 */
export async function selectUser(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    SelectUserQueryResponseType,
    ResponseErrorConfig<SelectUser401Type | SelectUser403Type>,
    unknown
  >({
    method: "GET",
    url: getSelectUserUrl().toString(),
    ...requestConfig,
  });
  return selectUserQueryResponseSchema.parse(res.data);
}

export function getGetUserByIdUrl({
  id,
}: {
  id: GetUserByIdPathParamsType["id"];
}) {
  return `/api/users/${id}` as const;
}

/**
 * @description Get user by id route handler.
 * @summary Get user by id
 * {@link /api/users/:id}
 */
export async function getUserById(
  { id }: { id: GetUserByIdPathParamsType["id"] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetUserByIdQueryResponseType,
    ResponseErrorConfig<
      | GetUserById401Type
      | GetUserById403Type
      | GetUserById404Type
      | GetUserById422Type
    >,
    unknown
  >({
    method: "GET",
    url: getGetUserByIdUrl({ id }).toString(),
    ...requestConfig,
  });
  return getUserByIdQueryResponseSchema.parse(res.data);
}

export function getUpdateUserUrl({
  id,
}: {
  id: UpdateUserPathParamsType["id"];
}) {
  return `/api/users/${id}` as const;
}

/**
 * @description Update user route handler.
 * @summary Update user
 * {@link /api/users/:id}
 */
export async function updateUser(
  { id }: { id: UpdateUserPathParamsType["id"] },
  data?: UpdateUserMutationRequestType,
  config: Partial<RequestConfig<UpdateUserMutationRequestType>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UpdateUserMutationResponseType,
    ResponseErrorConfig<
      | UpdateUser401Type
      | UpdateUser403Type
      | UpdateUser404Type
      | UpdateUser422Type
    >,
    UpdateUserMutationRequestType
  >({
    method: "PATCH",
    url: getUpdateUserUrl({ id }).toString(),
    data,
    ...requestConfig,
  });
  return updateUserMutationResponseSchema.parse(res.data);
}

export function getDeleteUserUrl({
  id,
}: {
  id: DeleteUserPathParamsType["id"];
}) {
  return `/api/users/${id}` as const;
}

/**
 * @description Delete user route handler.
 * @summary Delete user
 * {@link /api/users/:id}
 */
export async function deleteUser(
  { id }: { id: DeleteUserPathParamsType["id"] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    DeleteUserMutationResponseType,
    ResponseErrorConfig<
      | DeleteUser401Type
      | DeleteUser403Type
      | DeleteUser404Type
      | DeleteUser422Type
    >,
    unknown
  >({
    method: "DELETE",
    url: getDeleteUserUrl({ id }).toString(),
    ...requestConfig,
  });
  return deleteUserMutationResponseSchema.parse(res.data);
}

export function getCreateUserUrl() {
  return `/api/users/` as const;
}

/**
 * @description Create user route handler.
 * @summary Create user
 * {@link /api/users/}
 */
export async function createUser(
  data: CreateUserMutationRequestType,
  config: Partial<RequestConfig<CreateUserMutationRequestType>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CreateUserMutationResponseType,
    ResponseErrorConfig<
      CreateUser401Type | CreateUser403Type | CreateUser422Type
    >,
    CreateUserMutationRequestType
  >({
    method: "POST",
    url: getCreateUserUrl().toString(),
    data,
    ...requestConfig,
  });
  return createUserMutationResponseSchema.parse(res.data);
}

export function getGetVersionUrl() {
  return `/api/system/version` as const;
}

/**
 * @description Get the API version.
 * @summary Get the API version
 * {@link /api/system/version}
 */
export async function getVersion(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetVersionQueryResponseType,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "GET",
    url: getGetVersionUrl().toString(),
    ...requestConfig,
  });
  return getVersionQueryResponseSchema.parse(res.data);
}

export function getGetDescriptionUrl() {
  return `/api/system/description` as const;
}

/**
 * @description Get the API description.
 * @summary Get the API description
 * {@link /api/system/description}
 */
export async function getDescription(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetDescriptionQueryResponseType,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "GET",
    url: getGetDescriptionUrl().toString(),
    ...requestConfig,
  });
  return getDescriptionQueryResponseSchema.parse(res.data);
}

export function authRequests() {
  return {
    getCSRFToken,
    login,
    logout,
    me,
    listUsers,
    selectUser,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
    getVersion,
    getDescription,
  };
}
