import type { LoginRequestType } from "../ts/LoginRequestType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description Login request schema.
 */
export const loginRequestSchema = z
  .object({
    email: z.string().describe("The email of the user."),
    password: z.string().describe("The password of the user."),
  })
  .describe("Login request schema.") as unknown as ToZod<LoginRequestType>;
