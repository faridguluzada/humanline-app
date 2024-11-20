"use client";

import React, { useState, useEffect } from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { EyeIcon, TrashIcon, EditIcon } from "@/public/assets/icons";

interface Data {
  id: number;
  employeeName: string;
  employeeEmail: string;
  employeeImage: string;
  jobTitle: string;
  lineManager: string;
  departament: string;
  office: string;
  employeeStatus: string;
  account: string;
  selected: boolean;
}

const mockData: Data[] = [
  {
    id: 1,
    employeeName: "John Doe",
    employeeEmail: "john.doe@company.com",
    employeeImage: "https://example.com/image1.jpg",
    jobTitle: "Software Engineer",
    lineManager: "Manager 1",
    departament: "Engineering",
    office: "Office 1",
    employeeStatus: "Active",
    account: "Account 1",
    selected: false,
  },
  {
    id: 2,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "Inactive",
    account: "Account 2",
    selected: false,
  },
  {
    id: 3,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "On Boarding",
    account: "Account 2",
    selected: false,
  },
  {
    id: 4,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "Probation",
    account: "Account 2",
    selected: false,
  },
  {
    id: 5,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "On Leave",
    account: "Account 2",
    selected: false,
  },
];
interface Column {
  id: keyof Data;
  label: string;
}

const columns: Column[] = [
  { id: "employeeName", label: "Employee Name" },
  { id: "jobTitle", label: "Job Title" },
  { id: "lineManager", label: "Line Manager" },
  { id: "departament", label: "Departament" },
  { id: "office", label: "Office" },
  { id: "employeeStatus", label: "Employee Status" },
  { id: "account", label: "Account" },
];
const EmployeeTable: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState<keyof Data>("id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setData(mockData);
    };

    fetchData();
  }, [orderBy, order, page, rowsPerPage]);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleToggleSelect = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleToggleSelectAll = () => {
    setAllSelected(!allSelected);
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        selected: !allSelected,
      }))
    );
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={
                    !allSelected && data.some((row) => row.selected)
                  }
                  checked={allSelected}
                  onChange={handleToggleSelectAll}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  sx={{ color: "#687588", fontWeight: 700 }}
                  key={column.id}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell
                sx={{ color: "#687588", fontWeight: 700 }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Checkbox
                      checked={row.selected}
                      onChange={() => handleToggleSelect(row.id)}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell align="left" key={column.id}>
                      {row[column.id]}
                    </TableCell>
                  ))}

                  <TableCell align="center">
                    <Stack direction="row" spacing={1}>
                      <Button
                        sx={{ padding: "10px" }}
                        variant="contained"
                        color="success"
                      >
                        <EyeIcon />
                      </Button>
                      <Button
                        sx={{ padding: "10px" }}
                        variant="contained"
                        color="info"
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        sx={{ padding: "10px" }}
                        variant="contained"
                        color="error"
                      >
                        <TrashIcon />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EmployeeTable;
