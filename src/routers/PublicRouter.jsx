import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRouter = ({ isAuthenticated, component:Component, ...rest }) => {

	return (
		<Route { ...rest }
            component={ props => (
                ( !isAuthenticated ) 
                    ? ( <Component { ...props } /> )
                    : <Redirect to="/home" />
            )}
        
        />
	)
}

PublicRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRouter;