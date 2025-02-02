import type {
  Login200Type,
  Login401Type,
  Login403Type,
  LoginMutationRequestType,
  LoginMutationResponseType,
} from "../../ts/authTypes/LoginType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { CSRFErrorResponseSchema } from "../CSRFErrorResponseSchema.ts";
import { invalidCredentialsErrorResponseSchema } from "../invalidCredentialsErrorResponseSchema.ts";
import { loginRequestSchema } from "../loginRequestSchema.ts";
import { loginResponseSchema } from "../loginResponseSchema.ts";
import { z } from "zod";

/**
 * @description OK
 */
export const login200Schema = z.lazy(
  () => loginResponseSchema,
) as unknown as ToZod<Login200Type>;

/**
 * @description Unauthorized
 */
export const login401Schema = z.lazy(
  () => invalidCredentialsErrorResponseSchema,
) as unknown as ToZod<Login401Type>;

/**
 * @description Forbidden
 */
export const login403Schema = z.lazy(
  () => CSRFErrorResponseSchema,
) as unknown as ToZod<Login403Type>;

export const loginMutationRequestSchema = z.lazy(
  () => loginRequestSchema,
) as unknown as ToZod<LoginMutationRequestType>;

export const loginMutationResponseSchema = z.lazy(
  () => login200Schema,
) as unknown as ToZod<LoginMutationResponseType>;
