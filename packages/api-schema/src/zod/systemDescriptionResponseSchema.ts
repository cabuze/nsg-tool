import type { SystemDescriptionResponseType } from "../ts/SystemDescriptionResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description System description schema.
 */
export const systemDescriptionResponseSchema = z
  .object({
    description: z.string().describe("The API description."),
  })
  .describe(
    "System description schema.",
  ) as unknown as ToZod<SystemDescriptionResponseType>;
