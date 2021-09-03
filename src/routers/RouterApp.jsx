import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import DashboardRoutesPublic from './DashboardRoutesPublic';
import DashboardRoutesPrivate from './DashboardRoutesPrivate';

import { ContextAuth } from '../auth/ContextAuth';

const RouterApp = () => {

	const { auth } = useContext( ContextAuth );

	return (
		<Router>		
			<Switch>
				{
					auth.isAuthenticated ? <PrivateRouter
						exact
						component={ DashboardRoutesPrivate }
						isAuthenticated={ auth.isAuthenticated }
					/>
					
					: <PublicRouter
						exact
						component={ DashboardRoutesPublic }
						isAuthenticated={ auth.isAuthenticated }
					/>
				}
			</Switch>
		</Router>
	)
}

export default RouterApp;