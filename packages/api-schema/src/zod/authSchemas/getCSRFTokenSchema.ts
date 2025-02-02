import type {
  GetCSRFToken200Type,
  GetCSRFTokenMutationResponseType,
} from "../../ts/authTypes/GetCSRFTokenType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description OK
 */
export const getCSRFToken200Schema =
  z.unknown() as unknown as ToZod<GetCSRFToken200Type>;

export const getCSRFTokenMutationResponseSchema = z.lazy(
  () => getCSRFToken200Schema,
) as unknown as ToZod<GetCSRFTokenMutationResponseType>;
