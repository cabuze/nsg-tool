/**
 * @description Input for PageNumberPagination.
 */
export type PageNumberPageSizePaginationInputType = {
  /**
   * @description The page number.
   * @minLength 1
   * @default 1
   * @type integer | undefined
   */
  page?: number;
  /**
   * @description The page size.
   * @minLength 1
   * @default 100
   * @type integer | undefined
   */
  page_size?: number;
};
