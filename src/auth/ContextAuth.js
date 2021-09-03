import React, { useReducer, createContext } from 'react';

import { authReducer } from './authReducer';

export const ContextAuth = createContext();

const stateInitial = {
	isAuthenticated: false,
	token: '',
}

const init = () => {
	
	const auth = JSON.parse( window.localStorage.getItem('auth') );

	return auth || stateInitial;
}

const ContextAuthProvider = ({ children }) => {
	
	const [ auth, dispatch ] = useReducer(authReducer, stateInitial, init);

	return (
		<ContextAuth.Provider value={{
			auth,
			dispatch,
		}}>
			{ children }
		</ContextAuth.Provider>
	)
}

export default ContextAuthProvider;