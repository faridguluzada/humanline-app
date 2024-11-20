import Grid from "@mui/material/Unstable_Grid2";
import Skeleton from "@mui/material/Skeleton";

import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function TableOperationsSkeleton() {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid xs={6}>
        <Skeleton />
      </Grid>
      <Grid xs={2}>
        <Skeleton />
      </Grid>
      <Grid xs={2}>
        <Skeleton />
      </Grid>
      <Grid xs={2}>
        <Skeleton />
      </Grid>
    </Grid>
  );
}

export function TableSkeleton({ rowsNum }: { rowsNum: number }) {
  return (
    <Paper>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {[...Array(6)].map((row, index) => (
                <TableCell key={index}>
                  <Skeleton animation="wave" variant="text" />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(8)].map((row, index) => (
              <TableRow key={index}>
                {[...Array(6)].map((row, index) => (
                  <TableCell key={index}>
                    <Skeleton animation="wave" variant="text" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  );
}
