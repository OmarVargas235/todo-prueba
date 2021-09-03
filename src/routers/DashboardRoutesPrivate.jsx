import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/navbar/';
import ListTasks from '../components/listTasks/';

const DashboardRoutesPrivate = () => (
	<React.Fragment>
		
		<Navbar />
		
		<Switch>
			<Route exact path="/home" component={ListTasks} />

			<Redirect from="/" to="/home" />
		</Switch>

	</React.Fragment>
)

export default DashboardRoutesPrivate;