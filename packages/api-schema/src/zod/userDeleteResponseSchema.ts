import type { UserDeleteResponseType } from "../ts/UserDeleteResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description User delete response schema.
 */
export const userDeleteResponseSchema = z
  .object({})
  .describe(
    "User delete response schema.",
  ) as unknown as ToZod<UserDeleteResponseType>;
