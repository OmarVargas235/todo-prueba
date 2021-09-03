import React from 'react';

import MenuMdPage from './MenuMdPage';
import DrawerPage from './DrawerPage';
import { NavbarContainer } from '../style';
import { theme } from '../../../utils/styleMaterialUi'

import { ThemeProvider } from '@material-ui/core/styles';

const NavbarPage = ({ createTask, matches }) => (
	<NavbarContainer className="p-3">
		<ThemeProvider theme={theme}>
			{
				matches 
					? <MenuMdPage
						createTask={createTask}
						// auth={auth}
						// auth={{isAuthenticated: true}}
						// classes={classes}
						// dataUser={dataUser}
						// history={history}
						// isActiveLink={isActiveLink}
						// setActiveSearch={setActiveSearch}
					/>
					: <DrawerPage
						createTask={createTask}
						// auth={auth}
						// dataUser={dataUser}
						// history={history}
						// isActiveLink={isActiveLink}
						// setActiveSearch={setActiveSearch}
					/>
			}
		</ThemeProvider>
	</NavbarContainer>
)

export default NavbarPage;
