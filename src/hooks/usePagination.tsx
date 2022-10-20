
import { useMemo } from 'react';

type PaginationProps = {
  totalCount: number,
  pageSize: number,
  currentPage: number,
  totalPageCount: number
}

const siblingCount = 1
export const usePagination = ({ totalCount, pageSize, currentPage, totalPageCount }: PaginationProps) => {
  const paginationRange = useMemo(() => {

    const range = (start: number, end: number) => {
      let length = end - start + 1;
      return Array.from({ length }, (_, index) => index + start);
    };
    const totalPageNumbers = siblingCount + 2;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeft = leftSiblingIndex > 1;
    const shouldShowRight = rightSiblingIndex < totalPageCount;


    if (!shouldShowLeft && shouldShowRight) {
      let leftItemCount = 1 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange];
    }

    if (shouldShowLeft && !shouldShowRight) {
      let rightItemCount = 1 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [...rightRange];
    }


    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [...middleRange];

  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
