import React, { useState } from 'react';
import compose from "lodash/flowRight";

import ListTasksPage from './components/ListTasksPage';
import { withTodos } from '../../HOC/withTodos';
import { withUpdateTodo } from '../../HOC/withUpdateTodo';
import Spinner from '../../layaut/Spinner';
import { alert } from '../../utils/alert';
import { inputsTasks } from '../../utils/helper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const ListTasks = ({ todos, updateTodo }) => {
	
	const classes = useStyles();

	const [page, setPage] = useState(0);
  	const [rowsPerPage, setRowsPerPage] = useState(5);

  	const handleChangePage = (event, newPage) => setPage(newPage);

	const handleChangeRowsPerPage = (event) => {
		
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const editTask = async id => {

		const { name, description, completed } = todos.find(todo => todo.id === id);
		const formValues = await inputsTasks('Editar tarea', { name, description });
		const isEmpty = formValues.some(text => text.trim() === '');

		if (isEmpty) return alert('error', ['Todos los campos son obligatorios']);

		const [nameTask, descriptionTask] = formValues;
		const data = { name: nameTask, description: descriptionTask, completed };

		updateTodo( id, data );
	}
	
	return (
		<React.Fragment>
			{
				todos.length === 0 ? <Spinner />
				: <ListTasksPage
					classes={classes}
					data={todos}
					editTask={editTask}
					handleChangePage={handleChangePage}
					handleChangeRowsPerPage={handleChangeRowsPerPage}
					page={page}
					rowsPerPage={rowsPerPage}
				/>
			}
		</React.Fragment>
	)
}

const ListTasksCompose = compose(
	withTodos,
	withUpdateTodo
)(ListTasks);

export default ListTasksCompose;