import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableComponent = ({ children }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 150,
    },
    header: {
      background: "rgb(44, 202, 148)",
    },
    container: {
      aling: "center",
    },
    cell: {
      color: "white",
    },
  });

  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell className={classes.cell} align="left">
              Details
            </TableCell>
            <TableCell className={classes.cell} align="left">
              Rank
            </TableCell>
            <TableCell className={classes.cell} align="left">
              Coin
            </TableCell>
            <TableCell className={classes.cell} align="left">
              Name
            </TableCell>
            <TableCell className={classes.cell} align="left">
              Price
            </TableCell>
            <TableCell className={classes.cell} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
