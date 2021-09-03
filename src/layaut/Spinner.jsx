import React from 'react';

import { theme } from '../utils/styleMaterialUi';

import CircularProgress from '@material-ui/core/CircularProgress';
import { ThemeProvider } from '@material-ui/core/styles';

const Spinner = () => (
	<div className="mt-5 w-100 text-center">
		<ThemeProvider theme={theme}>
			<CircularProgress color="primary" />
		</ThemeProvider>
	</div>
);

export default Spinner;