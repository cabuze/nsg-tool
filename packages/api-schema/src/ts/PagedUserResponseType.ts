import type { UserResponseType } from "./UserResponseType.ts";

export type PagedUserResponseType = {
  /**
   * @type integer
   */
  count: number;
  /**
   * @type integer
   */
  current_page: number;
  /**
   * @type integer
   */
  pages: number;
  previous_page: number | null;
  next_page: number | null;
  previous_url: string | null;
  next_url: string | null;
  /**
   * @type array
   */
  items: UserResponseType[];
};
