import type { SystemVersionResponseType } from "../ts/SystemVersionResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description System version schema.
 */
export const systemVersionResponseSchema = z
  .object({
    version: z.string().describe("The API version."),
  })
  .describe(
    "System version schema.",
  ) as unknown as ToZod<SystemVersionResponseType>;
