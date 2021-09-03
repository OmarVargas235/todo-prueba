import React, { useState } from 'react';

import CreateAccountPage from './CreateAccountPage';
import { alert } from '../../utils/alert';
import { useForm } from '../../customHooks/useForm';
import { useValidateForm } from '../../customHooks/useValidateForm';
import { requestWithoutToken } from '../../utils/fetch';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const CreateAccount = ({ history }) => {

	const matches = useMediaQuery('(max-width: 576px)');

	const [ formData, handleChange ] = useForm({
		name: '',
		lastName: '',
		email: '',
		password: '',
		repeatPassword: '',
	});

	const [required, validate] = useValidateForm({
		name: false,
		lastName: false,
		email: false,
		password: false,
		repeatPassword: false,
	});

	const [isRequired, setIsRequired] = useState({});

	const registerUser = async e => {
		
		e.preventDefault();

		const { name, lastName, email, password, repeatPassword } = formData;

		// Comprobar que todos los inputs no esten vacios
		setIsRequired(required);

		// Validar que el formulario no este vacio
		if ( validate({ name, lastName, email, password, repeatPassword }) ) return;
		
		// Enviando la data del formulario al backend
		const { ok, messages } = await requestWithoutToken('create-user', formData);

		alert(ok ? 'success' : 'error', messages);

		if (ok) history.push('/iniciar-sesion');
	}
	
	return (
		<CreateAccountPage
			history={history}
			handleChange={handleChange}
			isRequired={isRequired}
			matches={matches}
			registerUser={registerUser}
		/>
	)
}

export default CreateAccount;