import React from 'react';
import compose from "lodash/flowRight";

import TaskPage from '../components/TaskPage';
import { withUpdateTodo } from '../../../HOC/withUpdateTodo';
import { withRemoveTodo } from '../../../HOC/withRemoveTodo';
import { inputsTasks } from '../../../utils/helper';
import { alert } from '../../../utils/alert';

const Task = ({ data, removeTodo, updateTodo }) => {
	
	const editTask = async () => {

		const { id, name, description, completed } = data;
		const formValues = await inputsTasks('Editar tarea', { name, description });
		const isEmpty = formValues.some(text => text.trim() === '');

		if (isEmpty) return alert('error', ['Todos los campos son obligatorios']);

		const [nameTask, descriptionTask] = formValues;
		const dataSend = { name: nameTask, description: descriptionTask, completed };

		updateTodo( id, dataSend );
		alert('success',  ['Tarea editada con exito']);
	}

	const deleteTask = () => {

		removeTodo(data.id);
		alert('success',  ['Tarea eliminada con exito']);
	}
	
	return (
		<TaskPage
			data={data}
			deleteTask={deleteTask}
			editTask={editTask}
		/>
	)
}

const TaskCompose = compose(
	withRemoveTodo,
	withUpdateTodo,
)(Task);

export default TaskCompose;