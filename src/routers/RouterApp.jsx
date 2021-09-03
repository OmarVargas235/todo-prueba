import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import DashboardRoutesPublic from './DashboardRoutesPublic';
import DashboardRoutesPrivate from './DashboardRoutesPrivate';

const RouterApp = () => (
	<Router>		
		<Switch>
			{
				true ? <PrivateRouter
					exact
					component={ DashboardRoutesPrivate }
					isAuthenticated={ true }
					// isAuthenticated={ auth.isAuthenticated }
				/>
				
				: <PublicRouter
					exact
					component={ DashboardRoutesPublic }
					isAuthenticated={ true }
					// isAuthenticated={ auth.isAuthenticated }
				/>
			}
		</Switch>
	</Router>
)

export default RouterApp;