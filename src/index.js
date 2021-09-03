import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextAuthProvider from './auth/ContextAuth';

ReactDOM.render(
	<ContextAuthProvider>
		<App />
	</ContextAuthProvider>,
	document.getElementById('root')
);
