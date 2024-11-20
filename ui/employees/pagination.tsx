"use client";

import MuiPagination from "@mui/material/Pagination";

import { useQueryString } from "@/hooks/useQueryString";
import { PAGE_SIZE } from "@/lib/constants";

export default function Pagination({
  count,
  currentPage,
}: {
  count: number;
  currentPage: number;
}) {
  const { createQueryString } = useQueryString();

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    createQueryString("page", value.toString());
  };

  if (pageCount <= 1) return null;

  return (
    <MuiPagination
      count={pageCount}
      page={currentPage}
      onChange={handleChange}
      shape="rounded"
      color="primary"
    />
  );
}
