import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>时间</TableCell>
                        <TableCell align="right">血糖&nbsp;(mg/L)</TableCell>
                        <TableCell align="right">收缩压&nbsp;(mmHg)</TableCell>
                        <TableCell align="right">舒张压&nbsp;(mmHg)</TableCell>
                        <TableCell align="right">其他&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow key={row.time}>
                            <TableCell component="th" scope="row">
                                {row.time}
                            </TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.pressure_s}</TableCell>
                            <TableCell align="right">{row.pressure_d}</TableCell>
                            <TableCell align="right">{row.others}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

