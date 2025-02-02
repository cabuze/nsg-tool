import type {
  SelectUser200Type,
  SelectUser401Type,
  SelectUser403Type,
  SelectUserQueryResponseType,
} from "../../ts/usersTypes/SelectUserType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { authenticationErrorResponseSchema } from "../authenticationErrorResponseSchema.ts";
import { authorizationErrorResponseSchema } from "../authorizationErrorResponseSchema.ts";
import { userSelectResponseSchema } from "../userSelectResponseSchema.ts";
import { z } from "zod";

/**
 * @description OK
 */
export const selectUser200Schema = z.array(
  z.lazy(() => userSelectResponseSchema),
) as unknown as ToZod<SelectUser200Type>;

/**
 * @description Unauthorized
 */
export const selectUser401Schema = z.lazy(
  () => authenticationErrorResponseSchema,
) as unknown as ToZod<SelectUser401Type>;

/**
 * @description Forbidden
 */
export const selectUser403Schema = z.lazy(
  () => authorizationErrorResponseSchema,
) as unknown as ToZod<SelectUser403Type>;

export const selectUserQueryResponseSchema = z.lazy(
  () => selectUser200Schema,
) as unknown as ToZod<SelectUserQueryResponseType>;
