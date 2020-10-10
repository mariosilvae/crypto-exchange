import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import "./TableRowComponent.scss";

const TableRowComponent = ({
  rank,
  symbol,
  name,
  priceUsd,
  marketCapUsd,
  changePercent24Hr,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          #{rank}
        </TableCell>
        <TableCell align="left">
          <img
            src={`https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            alt={name}
          />
        </TableCell>
        <TableCell align="left">
          {name}
          <br />
          {symbol}
        </TableCell>
        <TableCell align="left">
          ${Number(priceUsd).toFixed(4)}... USD
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h4" gutterBottom component="div">
                {name}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Change (24Hr)</TableCell>
                    <TableCell align="right">Market Cap ($)</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right">
                      {Number(changePercent24Hr).toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">$ {marketCapUsd}</TableCell>
                    <TableCell align="right">$ {priceUsd}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default TableRowComponent;
