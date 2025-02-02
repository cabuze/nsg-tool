import type { PagedUserResponseType } from "../ts/PagedUserResponseType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { userResponseSchema } from "./userResponseSchema.ts";
import { z } from "zod";

export const pagedUserResponseSchema = z.object({
  count: z.number().int(),
  current_page: z.number().int(),
  pages: z.number().int(),
  previous_page: z.union([z.number().int(), z.null()]),
  next_page: z.union([z.number().int(), z.null()]),
  previous_url: z.union([z.string(), z.null()]),
  next_url: z.union([z.string(), z.null()]),
  items: z.array(z.lazy(() => userResponseSchema)),
}) as unknown as ToZod<PagedUserResponseType>;
