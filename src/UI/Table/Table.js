import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    //color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      // backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.colHeadings.map(el => {
              return <StyledTableCell>{el.title}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
            <StyledTableRow key={row.name}>
              {props.colHeadings.map(el => {
                return (
                  <StyledTableCell align="right">
                    {row[el.field]}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
