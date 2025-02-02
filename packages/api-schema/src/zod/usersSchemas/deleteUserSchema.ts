import type {
  DeleteUserPathParamsType,
  DeleteUser204Type,
  DeleteUser401Type,
  DeleteUser403Type,
  DeleteUser404Type,
  DeleteUser422Type,
  DeleteUserMutationResponseType,
} from "../../ts/usersTypes/DeleteUserType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { authenticationErrorResponseSchema } from "../authenticationErrorResponseSchema.ts";
import { authorizationErrorResponseSchema } from "../authorizationErrorResponseSchema.ts";
import { CSRFErrorResponseSchema } from "../CSRFErrorResponseSchema.ts";
import { multipleObjectsReturnedErrorResponseSchema } from "../multipleObjectsReturnedErrorResponseSchema.ts";
import { notFoundErrorResponseSchema } from "../notFoundErrorResponseSchema.ts";
import { protectedErrorResponseSchema } from "../protectedErrorResponseSchema.ts";
import { userDeleteResponseSchema } from "../userDeleteResponseSchema.ts";
import { z } from "zod";

export const deleteUserPathParamsSchema = z.object({
  id: z.number().int(),
}) as unknown as ToZod<DeleteUserPathParamsType>;

/**
 * @description No Content
 */
export const deleteUser204Schema = z.lazy(
  () => userDeleteResponseSchema,
) as unknown as ToZod<DeleteUser204Type>;

/**
 * @description Unauthorized
 */
export const deleteUser401Schema = z.lazy(
  () => authenticationErrorResponseSchema,
) as unknown as ToZod<DeleteUser401Type>;

/**
 * @description Forbidden
 */
export const deleteUser403Schema = z.union([
  z.lazy(() => authorizationErrorResponseSchema),
  z.lazy(() => CSRFErrorResponseSchema),
]) as unknown as ToZod<DeleteUser403Type>;

/**
 * @description Not Found
 */
export const deleteUser404Schema = z.lazy(
  () => notFoundErrorResponseSchema,
) as unknown as ToZod<DeleteUser404Type>;

/**
 * @description Unprocessable Entity
 */
export const deleteUser422Schema = z.union([
  z.lazy(() => multipleObjectsReturnedErrorResponseSchema),
  z.lazy(() => protectedErrorResponseSchema),
]) as unknown as ToZod<DeleteUser422Type>;

export const deleteUserMutationResponseSchema = z.lazy(
  () => deleteUser204Schema,
) as unknown as ToZod<DeleteUserMutationResponseType>;
