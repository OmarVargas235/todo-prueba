import React from 'react';

import Logo from '../../../assets/img/logo.png';
import { theme } from '../../../utils/styleMaterialUi';

import { Grid, Typography, Avatar, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddIcon from '@material-ui/icons/Add';

const MenuMdPage = ({ createTask, logout }) => (
	<ThemeProvider theme={theme}>
		<Grid container>
			<Grid item sm={2} className="text-center">
				<img 
					src={Logo}
					alt="logo"
					className="img-logo"
				/>
			</Grid>
			
			<Grid item sm={4} container direction="row" alignContent="center" justifyContent="center">
				<Avatar style={{backgroundColor: '#572845'}}>OV</Avatar>
		
				<Typography
					variant="body1"
					component="span"
					className="ml-2"
				>
					Omar Vargas
				</Typography>
			</Grid>

			<Grid item sm={3} container direction="row" alignContent="center" justifyContent="center">
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					endIcon={<AddIcon />}
					onClick={createTask}
				>
			  		Crear tarea
				</Button>
			</Grid>

			<Grid
				item
				sm={2}
				container
				direction="row"
				alignContent="center"
				justifyContent="center"
				className="pointer"
				onClick={logout}
			>
				<Typography
					variant="body1"
					component="span"
					className="mr-2"
				>
					Salir
				</Typography>

				<MeetingRoomIcon
        			fontSize="small"
        			color="secondary"
        		/>
			</Grid>
		</Grid>
	</ThemeProvider>
)

export default MenuMdPage;