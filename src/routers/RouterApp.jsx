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
				false ? <PrivateRouter
					exact
					component={ DashboardRoutesPrivate }
					isAuthenticated={ false }
					// isAuthenticated={ auth.isAuthenticated }
				/>
				
				: <PublicRouter
					exact
					component={ DashboardRoutesPublic }
					isAuthenticated={ false }
					// isAuthenticated={ auth.isAuthenticated }
				/>
			}
		</Switch>
	</Router>
)

export default RouterApp;