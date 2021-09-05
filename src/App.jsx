import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { EightBaseAppProvider } from '@8base/app-provider';
import 'moment/locale/es';

import './assets/bootstrap.css';
import RouterApp from './routers/RouterApp';
import Spinner from './layaut/Spinner';

const Body = createGlobalStyle`

	body {
		background-color: #1C1E33;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	// Estilos de los inputs de tipo password
	.password {

		svg {
			fill: white;
		}
		
		.MuiOutlinedInput-root {
			&:hover {
				border: 0 solid #EE3A57;

				.MuiOutlinedInput-notchedOutline {
					border: 1px solid #EE3A57;
				}
			}
		}

		.MuiOutlinedInput-notchedOutline {
			border: 1px solid #852845;		
		}

		.MuiInputBase-input {
			color: white;
		}
	}
`;

const ENDPOINT_URL = 'https://api.8base.com/ckt09803d043008jl0t8od7cg';

const App = () => (
		<EightBaseAppProvider uri={ENDPOINT_URL}>
			{({ loading }) => loading ? <Spinner /> : (
				<React.Fragment>
					<Body />
					<RouterApp />
				</React.Fragment>
			)}
		</EightBaseAppProvider>
)

export default App;