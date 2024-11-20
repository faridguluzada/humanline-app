import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Actions from "@/ui/actions";
import Status from "@/ui/status";

import { getFilteredEmployees } from "@/services/apiEmployee";
import { columns } from "@/constants";

export default async function EmployeeTable({
  query,
  job,
  office,
  status,
  currentPage,
}: {
  query: string;
  job: string;
  office: string;
  status: string;
  currentPage: number;
}) {
  const employees = await getFilteredEmployees({
    query,
    status,
    office,
    job,
    currentPage,
  });

  return (
    <Paper>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map((column: any) => (
                <TableCell
                  sx={{ color: "#687588", fontWeight: 700 }}
                  key={column.id}
                >
                  <TableSortLabel
                  // active={orderBy === column.id}
                  // direction={orderBy === column.id ? order : "asc"}
                  // onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell
                align="center"
                sx={{ color: "#687588", fontWeight: 700 }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.map((employee: any) => (
              <TableRow key={employee.id}>
                <TableCell align="left">
                  {
                    <Stack direction="row" spacing={1}>
                      <Avatar src={employee?.image} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {employee.firstName} {employee.lastName}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="caption"
                          display="block"
                        >
                          {employee.email}
                        </Typography>
                      </Box>
                    </Stack>
                  }
                </TableCell>
                <TableCell>{employee?.job?.title || "-"}</TableCell>
                <TableCell>{employee?.lineManager?.firstName || "-"}</TableCell>
                <TableCell>{employee?.department?.name || "-"}</TableCell>
                <TableCell>{employee?.office?.name || "-"}</TableCell>
                <TableCell align="center">
                  <Status status={employee?.status} />
                </TableCell>

                <TableCell align="right">
                  <Actions />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  );
}

// const [newData, setNewData] = useState<Data[]>([]);
// const [page, setPage] = useState(0);
// const [rowsPerPage, setRowsPerPage] = useState(5);
// const [orderBy, setOrderBy] = useState<keyof Data>("id");
// const [order, setOrder] = useState<"asc" | "desc">("asc");
// const [allSelected, setAllSelected] = useState(false);

// useEffect(() => {
//   const fetchData = async () => {
//     setNewData(data);
//   };

//   fetchData();
// }, [orderBy, order, page, rowsPerPage]);

// const handleRequestSort = (property: keyof Data) => {
//   const isAsc = orderBy === property && order === "asc";
//   setOrder(isAsc ? "desc" : "asc");
//   setOrderBy(property);
// };

// const handleToggleSelect = (id: number) => {
//   setNewData((prevData) =>
//     prevData.map((item) =>
//       item.id === id ? { ...item, selected: !item.selected } : item
//     )
//   );
// };

// const handleToggleSelectAll = () => {
//   setAllSelected(!allSelected);
//   setNewData((prevData) =>
//     prevData.map((item) => ({
//       ...item,
//       selected: !allSelected,
//     }))
//   );
// };

// const handleChangePage = (event: unknown, newPage: number) => {
//   setPage(newPage);
// };

// const handleChangeRowsPerPage = (
//   event: React.ChangeEvent<HTMLInputElement>
// ) => {
//   setRowsPerPage(parseInt(event.target.value, 10));
//   setPage(0);
// };

/* {pagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={newData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )} */
