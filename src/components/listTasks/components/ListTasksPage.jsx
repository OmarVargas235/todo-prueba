import React from 'react';

import TaskPage from './TaskPage';

import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Paper, TableCell, TablePagination } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#572845',
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const ListTaskspage = ({ classes, data, editTask, handleChangePage, handleChangeRowsPerPage, page, rowsPerPage }) => (
	<div className="p-4 p-lg-5">
		<h4 className="font-weight-normal mb-3 text-light">
			Lista de tareas
		</h4>

		<TableContainer component={Paper} className="mb-4">
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="center">Marcar como completo</StyledTableCell>
						<StyledTableCell align="center">Nombre</StyledTableCell>
						<StyledTableCell align="center">Descripcion</StyledTableCell>
						<StyledTableCell align="center">Fecha</StyledTableCell>
						<StyledTableCell align="center">Opciones</StyledTableCell>
					</TableRow>
				</TableHead>
					
				<TableBody>
					{(rowsPerPage > 0
					? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
					: data
					).map((row, index) => (
						<TaskPage
							key={index}
							data={row}
							editTask={editTask}
						/>
					))}
				</TableBody>
			</Table>
			
			<TablePagination
				rowsPerPageOptions={[5, 10, 15]}
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				labelRowsPerPage="Filas por página"
				labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
			/>
		</TableContainer>
	</div>
)

export default ListTaskspage;