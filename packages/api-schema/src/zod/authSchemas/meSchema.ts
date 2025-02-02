import type {
  Me200Type,
  Me401Type,
  Me403Type,
  MeQueryResponseType,
} from "../../ts/authTypes/MeType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { authenticationErrorResponseSchema } from "../authenticationErrorResponseSchema.ts";
import { authorizationErrorResponseSchema } from "../authorizationErrorResponseSchema.ts";
import { meResponseSchema } from "../meResponseSchema.ts";
import { z } from "zod";

/**
 * @description OK
 */
export const me200Schema = z.lazy(
  () => meResponseSchema,
) as unknown as ToZod<Me200Type>;

/**
 * @description Unauthorized
 */
export const me401Schema = z.lazy(
  () => authenticationErrorResponseSchema,
) as unknown as ToZod<Me401Type>;

/**
 * @description Forbidden
 */
export const me403Schema = z.lazy(
  () => authorizationErrorResponseSchema,
) as unknown as ToZod<Me403Type>;

export const meQueryResponseSchema = z.lazy(
  () => me200Schema,
) as unknown as ToZod<MeQueryResponseType>;
