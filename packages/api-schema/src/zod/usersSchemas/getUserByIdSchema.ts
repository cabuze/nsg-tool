import type {
  GetUserByIdPathParamsType,
  GetUserById200Type,
  GetUserById401Type,
  GetUserById403Type,
  GetUserById404Type,
  GetUserById422Type,
  GetUserByIdQueryResponseType,
} from "../../ts/usersTypes/GetUserByIdType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { authenticationErrorResponseSchema } from "../authenticationErrorResponseSchema.ts";
import { authorizationErrorResponseSchema } from "../authorizationErrorResponseSchema.ts";
import { multipleObjectsReturnedErrorResponseSchema } from "../multipleObjectsReturnedErrorResponseSchema.ts";
import { notFoundErrorResponseSchema } from "../notFoundErrorResponseSchema.ts";
import { userResponseSchema } from "../userResponseSchema.ts";
import { z } from "zod";

export const getUserByIdPathParamsSchema = z.object({
  id: z.number().int(),
}) as unknown as ToZod<GetUserByIdPathParamsType>;

/**
 * @description OK
 */
export const getUserById200Schema = z.lazy(
  () => userResponseSchema,
) as unknown as ToZod<GetUserById200Type>;

/**
 * @description Unauthorized
 */
export const getUserById401Schema = z.lazy(
  () => authenticationErrorResponseSchema,
) as unknown as ToZod<GetUserById401Type>;

/**
 * @description Forbidden
 */
export const getUserById403Schema = z.lazy(
  () => authorizationErrorResponseSchema,
) as unknown as ToZod<GetUserById403Type>;

/**
 * @description Not Found
 */
export const getUserById404Schema = z.lazy(
  () => notFoundErrorResponseSchema,
) as unknown as ToZod<GetUserById404Type>;

/**
 * @description Unprocessable Entity
 */
export const getUserById422Schema = z.lazy(
  () => multipleObjectsReturnedErrorResponseSchema,
) as unknown as ToZod<GetUserById422Type>;

export const getUserByIdQueryResponseSchema = z.lazy(
  () => getUserById200Schema,
) as unknown as ToZod<GetUserByIdQueryResponseType>;
