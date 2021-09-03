import React from 'react';

import NavbarPage from './components/NavbarPage';
import { inputsTasks } from '../../utils/helper';
import { withCreateTodo } from '../../HOC/withCreateTodo';
import { alert } from '../../utils/alert';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const Navbar = ({ createTodo }) => {

	const matches = useMediaQuery('(min-width: 630px)');

	const createTask = async () => {

		const formValues = await inputsTasks('Crear tarea');
		const isEmpty = formValues.some(text => text.trim() === '');

		if (isEmpty) return alert('error', ['Todos los campos son obligatorios']);

		const [name, description] = formValues;
		const data = { name, description };

		const resp = createTodo(data);
		const message = !resp ? ['Ah ocurrido un error']: ['Tarea agregada con exito'];
		console.log(resp);
		alert(!resp ? 'error' : 'success',  message);
	}
	
	return (
		<NavbarPage
			createTask={createTask}
			matches={matches}
		/>
	)
}

export default withCreateTodo(Navbar);