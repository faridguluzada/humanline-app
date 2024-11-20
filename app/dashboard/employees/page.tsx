import { Suspense } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";

import EmployeeTable from "@/ui/employees/table";
import TableOperations from "@/ui/employees/table-operations";
import Header from "@/ui/employees/header";
import Pagination from "@/ui/employees/pagination";
import { TableOperationsSkeleton, TableSkeleton } from "@/ui/skeletons";

import { getEmployeePages } from "@/services/apiEmployee";

export default async function Employees({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    status?: string;
    office?: string;
    job?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const status = searchParams?.status || "";
  const office = searchParams?.office || "";
  const job = searchParams?.job || "";

  const count = await getEmployeePages({
    query,
    status,
    job,
    office,
  });

  return (
    <Grid container direction="column" gap={6}>
      <Grid container direction="row">
        <Header />
      </Grid>

      <Suspense fallback={<TableOperationsSkeleton />}>
        <TableOperations />
      </Suspense>

      <Stack spacing={4}>
        <Suspense
          key={query + status + office + job + currentPage}
          fallback={<TableSkeleton rowsNum={10} />}
        >
          <EmployeeTable
            query={query}
            status={status}
            office={office}
            job={job}
            currentPage={currentPage}
          />
        </Suspense>

        <Pagination currentPage={currentPage} count={count} />
      </Stack>
    </Grid>
  );
}
