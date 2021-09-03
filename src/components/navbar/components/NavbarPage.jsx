import React from 'react';

import MenuMdPage from './MenuMdPage';
import DrawerPage from './DrawerPage';
import { NavbarContainer } from '../style';
import { theme } from '../../../utils/styleMaterialUi'

import { ThemeProvider } from '@material-ui/core/styles';

const NavbarPage = ({ createTask, logout, matches }) => (
	<NavbarContainer className="p-3">
		<ThemeProvider theme={theme}>
			{
				matches 
					? <MenuMdPage
						createTask={createTask}
						logout={logout}
						// dataUser={dataUser}
						// history={history}
					/>
					: <DrawerPage
						createTask={createTask}
						logout={logout}
						// dataUser={dataUser}
						// history={history}
					/>
			}
		</ThemeProvider>
	</NavbarContainer>
)

export default NavbarPage;
