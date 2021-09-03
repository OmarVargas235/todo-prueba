import React from 'react';

import DehazeIcon from '@material-ui/icons/Dehaze';
import DrawerComponent from './DrawerComponent';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
}));

const DrawerPage = ({ createTask, dataUser, logout }) => {

	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => setOpen(true);

	const handleDrawerClose = () => setOpen(false);

  	return (
		<div className='mb-5'>
			<AppBar
				position="fixed"
				className="flex-row justify-content-between p-2"
			>
				<Toolbar className="px-0 px-sm-3">
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
					>
						<DehazeIcon
							fontSize="large"
        					color="secondary"
						/>
					</IconButton>
				</Toolbar>
			</AppBar>

			<DrawerComponent
				createTask={createTask}
				classes={classes}
				dataUser={dataUser}
				handleDrawerClose={handleDrawerClose}
				logout={logout}
				open={open}
			/>
		</div>
	);	
}

export default DrawerPage;