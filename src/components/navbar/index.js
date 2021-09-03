import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import compose from "lodash/flowRight";

import NavbarPage from './components/NavbarPage';
import { inputsTasks } from '../../utils/helper';
import { withCreateTodo } from '../../HOC/withCreateTodo';
import { alert } from '../../utils/alert';
import { logoutAuth } from '../../types/types';
import { requestWithoutToken } from '../../utils/fetch';
import { ContextAuth } from '../../auth/ContextAuth';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const Navbar = ({ createTodo, history }) => {

	const matches = useMediaQuery('(min-width: 630px)');

	const { auth, dispatch } = useContext( ContextAuth );

	useEffect(() => {
		
		async function callAPI() {
			
			const { ok, messages } = await requestWithoutToken('expired-token', auth);

			if (!ok) {

				dispatch({ type: logoutAuth });
				alert('error', messages);
				window.localStorage.removeItem('auth');
				history.replace('iniciar-sesion');
			}
		}

		callAPI();
		
	}, [auth]);

	const createTask = async () => {

		const formValues = await inputsTasks('Crear tarea');
		const isEmpty = formValues.some(text => text.trim() === '');

		if (isEmpty) return alert('error', ['Todos los campos son obligatorios']);

		const [name, description] = formValues;
		const data = { name, description };

		createTodo(data);
		formValues.length !== 0 && alert('success',  ['Tarea agregada con exito']);
	}

	const logout = async () => {
		
		console.log(auth);
		const { ok, messages } = await requestWithoutToken('logout-user', auth);
		
		if (!ok) return alert('error', messages);
		
		alert('success', messages);
		dispatch({ type: logoutAuth });
	}
	
	return (
		<NavbarPage
			createTask={createTask}
			logout={logout}
			matches={matches}
		/>
	)
}

const NavbarCompose = compose(
	withRouter,
	withCreateTodo,
)(Navbar);

export default (NavbarCompose);