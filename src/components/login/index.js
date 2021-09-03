import React, { useState } from 'react';

import LoginPage from './LoginPage';
import { useForm } from '../../customHooks/useForm';
// import { useValidateForm } from '../../customHooks/useValidateForm';
// import { requestWithoutToken } from '../../utils/fetch';
// import { alert } from '../../utils/alert';
// import { useShowMessage } from '../../customHooks/useShowMessage';

import { styleMaterialUiTheme } from '../../utils/styleMaterialUi';

const Login = ({ history }) => {

	const getLS = JSON.parse(window.localStorage.getItem('email-todooList')) || '';
	
  	const theme = styleMaterialUiTheme();

  	const [ formData, handleChange ] = useForm({
		email: getLS ? getLS.email : '',
		password: '',
	});

	// const [required, validate] = useValidateForm({
	// 	email: false,
	// 	password: false,
	// });

	// const [isRequired, setIsRequired] = useState({});
	const [checked, setChecked] = useState(getLS ? getLS.checked : false);

	// // Mostrar mensaje de cuenta activada o de si el token del formulario de cambiar contraseña a expirado.
	// useShowMessage(history, 'get-message');

	const login = async e => {
		
		e.preventDefault();
		
		console.log('hola');
		const { email, password } = formData;

		console.log(email, password);

	// 	// Validaciones en el frontend
	// 	setIsRequired(required);

	// 	if ( validate({ email, password }) ) return;

	// 	// Guardar en el localStorage
	// 	if (checked) window.localStorage.setItem('email-ecomerce', JSON.stringify({email, checked}));
	// 	else window.localStorage.removeItem('email-ecomerce');
		
	// 	// Enviando la data del formulario al backend
	// 	const data = await requestWithoutToken('login-user', formData, 'POST');
	// 	const { ok, messages, token } = data;

	// 	alert(ok ? 'success' : 'error', messages);

	// 	if (ok) {

	// 		window.localStorage.setItem( 'token', token );
	// 		history.push('/');

	// 		dispatch( getUserAction(token) );
	// 		dispatch( loginAction(token) );

	// 		return;
	// 	}

	// 	// Desactivando el boton y luego activandolo cuando se quite la alerta
	// 	setDesactiveBtn(!ok ? true : false);
	// 	setTimeout(() => setDesactiveBtn(false), 3000);
	}
	
	return (
		<LoginPage
			checked={checked}
			formData={formData}
			history={history}
			handleChange={handleChange}
			login={login}
			setChecked={setChecked}
			theme={theme}
		/>
	)
}

export default Login;