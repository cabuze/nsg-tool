import type {
  ListUsersQueryParamsType,
  ListUsers200Type,
  ListUsers401Type,
  ListUsers403Type,
  ListUsersQueryResponseType,
} from "../../ts/usersTypes/ListUsersType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils";
import { authenticationErrorResponseSchema } from "../authenticationErrorResponseSchema.ts";
import { authorizationErrorResponseSchema } from "../authorizationErrorResponseSchema.ts";
import { pagedUserResponseSchema } from "../pagedUserResponseSchema.ts";
import { userSortableFieldsEnumSchema } from "../userSortableFieldsEnumSchema.ts";
import { z } from "zod";

export const listUsersQueryParamsSchema = z
  .object({
    email: z
      .union([z.string(), z.null()])
      .describe("Filter by the email of the user.")
      .optional(),
    display_name: z
      .union([z.string(), z.null()])
      .describe("Filter by the display name of the user.")
      .optional(),
    is_active: z
      .union([z.boolean(), z.null()])
      .describe("Filter by the is active of the user.")
      .optional(),
    search: z
      .union([z.string(), z.null()])
      .describe("Filter by the email or display name of the user.")
      .optional(),
    ordering: z
      .union([z.array(z.lazy(() => userSortableFieldsEnumSchema)), z.null()])
      .describe(
        "Sort by email, display_name or timestamp of creation of the user.",
      )
      .optional(),
    page: z.number().int().min(1).default(1).describe("The page number."),
    page_size: z.number().int().min(1).default(100).describe("The page size."),
  })
  .optional() as unknown as ToZod<ListUsersQueryParamsType>;

/**
 * @description OK
 */
export const listUsers200Schema = z.lazy(
  () => pagedUserResponseSchema,
) as unknown as ToZod<ListUsers200Type>;

/**
 * @description Unauthorized
 */
export const listUsers401Schema = z.lazy(
  () => authenticationErrorResponseSchema,
) as unknown as ToZod<ListUsers401Type>;

/**
 * @description Forbidden
 */
export const listUsers403Schema = z.lazy(
  () => authorizationErrorResponseSchema,
) as unknown as ToZod<ListUsers403Type>;

export const listUsersQueryResponseSchema = z.lazy(
  () => listUsers200Schema,
) as unknown as ToZod<ListUsersQueryResponseType>;
