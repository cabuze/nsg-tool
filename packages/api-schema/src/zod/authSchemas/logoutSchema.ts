import type {
  Logout200Type,
  Logout401Type,
  Logout403Type,
  LogoutMutationResponseType,
} from "../../ts/authTypes/LogoutType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { authenticationErrorResponseSchema } from "../authenticationErrorResponseSchema.ts";
import { authorizationErrorResponseSchema } from "../authorizationErrorResponseSchema.ts";
import { CSRFErrorResponseSchema } from "../CSRFErrorResponseSchema.ts";
import { logoutResponseSchema } from "../logoutResponseSchema.ts";
import { z } from "zod";

/**
 * @description OK
 */
export const logout200Schema = z.lazy(
  () => logoutResponseSchema,
) as unknown as ToZod<Logout200Type>;

/**
 * @description Unauthorized
 */
export const logout401Schema = z.lazy(
  () => authenticationErrorResponseSchema,
) as unknown as ToZod<Logout401Type>;

/**
 * @description Forbidden
 */
export const logout403Schema = z.union([
  z.lazy(() => authorizationErrorResponseSchema),
  z.lazy(() => CSRFErrorResponseSchema),
]) as unknown as ToZod<Logout403Type>;

export const logoutMutationResponseSchema = z.lazy(
  () => logout200Schema,
) as unknown as ToZod<LogoutMutationResponseType>;
