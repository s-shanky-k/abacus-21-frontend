import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(() => ({
    head: {
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'MainFont',
      fontSize:20,
    },
    body: {
      fontSize: 20,
      backgroundColor: '#1a1a2e',
      color: 'white',
      fontFamily: 'MainFont',
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(() => ({
    root: {
        
    },
  }))(TableRow);

function createData(event, status, transaction_id) {
    return { event, status, transaction_id };
}

const rows = [
    createData('A', 'Paid', 6),
    createData('B', 'Paid', 9),
    createData('C', 'Paid', 1),
    createData('D', 'Paid', 3),
    createData('E', 'Paid', 1),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function DashboardTableComponent() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>EVENT</StyledTableCell>
                            <StyledTableCell align="right">STATUS</StyledTableCell>
                            <StyledTableCell align="right">TRANSACTION ID</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.event}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.status}</StyledTableCell>
                            <StyledTableCell align="right">{row.transaction_id}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
