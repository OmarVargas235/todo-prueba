import React, { useState } from 'react';

import ListTasksPage from './components/ListTasksPage';
import { withTodos } from '../../HOC/withTodos';

import { Alert } from '@material-ui/lab';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const ListTasks = ({ todos }) => {
	
	const classes = useStyles();

	const [page, setPage] = useState(0);
  	const [rowsPerPage, setRowsPerPage] = useState(5);

  	const handleChangePage = (event, newPage) => setPage(newPage);

	const handleChangeRowsPerPage = (event) => {
		
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	
	return (
		<React.Fragment>
			{
				todos.length === 0 
				? <Container maxWidth="sm" className="my-5">
					<Alert variant="filled" severity="info">
						<strong>No hay tareas asignadas</strong>
					</Alert>
				</Container>
				: <ListTasksPage
					classes={classes}
					data={todos}
					handleChangePage={handleChangePage}
					handleChangeRowsPerPage={handleChangeRowsPerPage}
					page={page}
					rowsPerPage={rowsPerPage}
				/>
			}
		</React.Fragment>
	)
}

export default withTodos(ListTasks);