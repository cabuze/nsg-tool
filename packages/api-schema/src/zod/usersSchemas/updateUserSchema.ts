import type {
  UpdateUserPathParamsType,
  UpdateUser200Type,
  UpdateUser401Type,
  UpdateUser403Type,
  UpdateUser404Type,
  UpdateUser422Type,
  UpdateUserMutationRequestType,
  UpdateUserMutationResponseType,
} from "../../ts/usersTypes/UpdateUserType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { authenticationErrorResponseSchema } from "../authenticationErrorResponseSchema.ts";
import { authorizationErrorResponseSchema } from "../authorizationErrorResponseSchema.ts";
import { checkConstraintErrorResponseSchema } from "../checkConstraintErrorResponseSchema.ts";
import { CSRFErrorResponseSchema } from "../CSRFErrorResponseSchema.ts";
import { multipleObjectsReturnedErrorResponseSchema } from "../multipleObjectsReturnedErrorResponseSchema.ts";
import { notFoundErrorResponseSchema } from "../notFoundErrorResponseSchema.ts";
import { notNullConstraintErrorResponseSchema } from "../notNullConstraintErrorResponseSchema.ts";
import { uniqueConstraintErrorResponseSchema } from "../uniqueConstraintErrorResponseSchema.ts";
import { userResponseSchema } from "../userResponseSchema.ts";
import { userUpdateRequestSchema } from "../userUpdateRequestSchema.ts";
import { z } from "zod";

export const updateUserPathParamsSchema = z.object({
  id: z.number().int(),
}) as unknown as ToZod<UpdateUserPathParamsType>;

/**
 * @description OK
 */
export const updateUser200Schema = z.lazy(
  () => userResponseSchema,
) as unknown as ToZod<UpdateUser200Type>;

/**
 * @description Unauthorized
 */
export const updateUser401Schema = z.lazy(
  () => authenticationErrorResponseSchema,
) as unknown as ToZod<UpdateUser401Type>;

/**
 * @description Forbidden
 */
export const updateUser403Schema = z.union([
  z.lazy(() => authorizationErrorResponseSchema),
  z.lazy(() => CSRFErrorResponseSchema),
]) as unknown as ToZod<UpdateUser403Type>;

/**
 * @description Not Found
 */
export const updateUser404Schema = z.lazy(
  () => notFoundErrorResponseSchema,
) as unknown as ToZod<UpdateUser404Type>;

/**
 * @description Unprocessable Entity
 */
export const updateUser422Schema = z.union([
  z.lazy(() => multipleObjectsReturnedErrorResponseSchema),
  z.lazy(() => checkConstraintErrorResponseSchema),
  z.lazy(() => notNullConstraintErrorResponseSchema),
  z.lazy(() => uniqueConstraintErrorResponseSchema),
]) as unknown as ToZod<UpdateUser422Type>;

export const updateUserMutationRequestSchema = z.lazy(
  () => userUpdateRequestSchema,
) as unknown as ToZod<UpdateUserMutationRequestType>;

export const updateUserMutationResponseSchema = z.lazy(
  () => updateUser200Schema,
) as unknown as ToZod<UpdateUserMutationResponseType>;
