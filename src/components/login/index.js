import React, { useState, useContext } from 'react';

import LoginPage from './LoginPage';
import { useForm } from '../../customHooks/useForm';
import { useValidateForm } from '../../customHooks/useValidateForm';
import { requestWithoutToken } from '../../utils/fetch';
import { alert } from '../../utils/alert';
import { ContextAuth } from '../../auth/ContextAuth';
import { login as loginAction } from '../../types/types';

const Login = ({ history }) => {

	// Obtener el email del usuario, del localStorage
	const getLS = JSON.parse(window.localStorage.getItem('email-todooList')) || '';

  	const [ formData, handleChange ] = useForm({
		email: getLS ? getLS.email : '',
		password: '',
	});

	const [required, validate] = useValidateForm({
		email: false,
		password: false,
	});

	const { dispatch } = useContext( ContextAuth );

	const [isRequired, setIsRequired] = useState({email: false, password: false});
	const [checked, setChecked] = useState(getLS ? getLS.checked : false);

	const login = async e => {
		
		e.preventDefault();
		
		const { email, password } = formData;

		// Comprobar que todos los inputs no esten vacios
		setIsRequired(required);

		// Validar que el formulario no este vacio
		if ( validate({ email, password }) ) return;

		// (Guardar o Eliminar) en el localStorage si el usuario a marcado la casilla "Recordar"
		if (checked) window.localStorage.setItem('email-todooList', JSON.stringify({email, checked}));
		else window.localStorage.removeItem('email-todooList');
		
		// Enviando la data del formulario al backend
		const { ok, messages, token } = await requestWithoutToken('login-user', formData);
		const action = {
			type: loginAction,
			payload: token,
		}

		alert(ok ? 'success' : 'error', messages);

		// Si no ha, habido ningun error, cambiar "isAuthenticated" a true y guardar el token
		if (ok) {

			window.localStorage.setItem( 'auth', JSON.stringify( {isAuthenticated: true, token} ) );
			dispatch( action );
			return history.push('/');
		}
	}
	
	return (
		<LoginPage
			checked={checked}
			formData={formData}
			history={history}
			handleChange={handleChange}
			isRequired={isRequired}
			login={login}
			setChecked={setChecked}
		/>
	)
}

export default Login;