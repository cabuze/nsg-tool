import type {
  CreateUser201Type,
  CreateUser401Type,
  CreateUser403Type,
  CreateUser422Type,
  CreateUserMutationRequestType,
  CreateUserMutationResponseType,
} from "../../ts/usersTypes/CreateUserType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { authenticationErrorResponseSchema } from "../authenticationErrorResponseSchema.ts";
import { authorizationErrorResponseSchema } from "../authorizationErrorResponseSchema.ts";
import { checkConstraintErrorResponseSchema } from "../checkConstraintErrorResponseSchema.ts";
import { CSRFErrorResponseSchema } from "../CSRFErrorResponseSchema.ts";
import { notNullConstraintErrorResponseSchema } from "../notNullConstraintErrorResponseSchema.ts";
import { uniqueConstraintErrorResponseSchema } from "../uniqueConstraintErrorResponseSchema.ts";
import { userCreateRequestSchema } from "../userCreateRequestSchema.ts";
import { userResponseSchema } from "../userResponseSchema.ts";
import { z } from "zod";

/**
 * @description Created
 */
export const createUser201Schema = z.lazy(
  () => userResponseSchema,
) as unknown as ToZod<CreateUser201Type>;

/**
 * @description Unauthorized
 */
export const createUser401Schema = z.lazy(
  () => authenticationErrorResponseSchema,
) as unknown as ToZod<CreateUser401Type>;

/**
 * @description Forbidden
 */
export const createUser403Schema = z.union([
  z.lazy(() => authorizationErrorResponseSchema),
  z.lazy(() => CSRFErrorResponseSchema),
]) as unknown as ToZod<CreateUser403Type>;

/**
 * @description Unprocessable Entity
 */
export const createUser422Schema = z.union([
  z.lazy(() => checkConstraintErrorResponseSchema),
  z.lazy(() => notNullConstraintErrorResponseSchema),
  z.lazy(() => uniqueConstraintErrorResponseSchema),
]) as unknown as ToZod<CreateUser422Type>;

export const createUserMutationRequestSchema = z.lazy(
  () => userCreateRequestSchema,
) as unknown as ToZod<CreateUserMutationRequestType>;

export const createUserMutationResponseSchema = z.lazy(
  () => createUser201Schema,
) as unknown as ToZod<CreateUserMutationResponseType>;
