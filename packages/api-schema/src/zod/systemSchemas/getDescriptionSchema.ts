import type {
  GetDescription200Type,
  GetDescriptionQueryResponseType,
} from "../../ts/systemTypes/GetDescriptionType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { systemDescriptionResponseSchema } from "../systemDescriptionResponseSchema.ts";
import { z } from "zod";

/**
 * @description OK
 */
export const getDescription200Schema = z.lazy(
  () => systemDescriptionResponseSchema,
) as unknown as ToZod<GetDescription200Type>;

export const getDescriptionQueryResponseSchema = z.lazy(
  () => getDescription200Schema,
) as unknown as ToZod<GetDescriptionQueryResponseType>;
