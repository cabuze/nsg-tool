import type {
  GetVersion200Type,
  GetVersionQueryResponseType,
} from "../../ts/systemTypes/GetVersionType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { systemVersionResponseSchema } from "../systemVersionResponseSchema.ts";
import { z } from "zod";

/**
 * @description OK
 */
export const getVersion200Schema = z.lazy(
  () => systemVersionResponseSchema,
) as unknown as ToZod<GetVersion200Type>;

export const getVersionQueryResponseSchema = z.lazy(
  () => getVersion200Schema,
) as unknown as ToZod<GetVersionQueryResponseType>;
