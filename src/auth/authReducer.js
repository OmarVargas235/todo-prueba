import { login, logoutAuth } from '../types/types';

export const authReducer = (state, { type, payload }) => {

	switch (type) {
		
		case login:

			return {
				...state,
				isAuthenticated: true,
				token: payload,
			}

		case logoutAuth:

			return {
				...state,
				isAuthenticated: false,
				token: '',
			}

		default: return state;
	}
}