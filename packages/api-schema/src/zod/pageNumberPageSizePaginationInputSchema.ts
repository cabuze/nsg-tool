import type { PageNumberPageSizePaginationInputType } from "../ts/PageNumberPageSizePaginationInputType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

/**
 * @description Input for PageNumberPagination.
 */
export const pageNumberPageSizePaginationInputSchema = z
  .object({
    page: z.number().int().min(1).default(1).describe("The page number."),
    page_size: z.number().int().min(1).default(100).describe("The page size."),
  })
  .describe(
    "Input for PageNumberPagination.",
  ) as unknown as ToZod<PageNumberPageSizePaginationInputType>;
