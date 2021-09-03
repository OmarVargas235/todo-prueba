import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CreateAccount from '../components/create-account/';
import Login from '../components/login/';

const DashboardRoutesPublic = () => (		
	<Switch>
		<Route exact path="/iniciar-sesion" component={Login} />
		<Route exact path="/crear-cuenta" component={CreateAccount} />

		<Redirect from='/' to="/iniciar-sesion" />
	</Switch>
)

export default DashboardRoutesPublic;