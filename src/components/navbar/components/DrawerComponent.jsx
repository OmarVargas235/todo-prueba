import React from 'react';

import Logo from '../../../assets/img/logo.png';

import { Typography, Button, Drawer, IconButton, List, Divider, Avatar } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddIcon from '@material-ui/icons/Add';

const DrawerComponent = ({ createTask, classes, dataUser, handleDrawerClose, logout, open }) => (
	<Drawer
		variant="persistent"
		anchor="left"
		open={open}
		classes={{
			paper: classes.drawerPaper,
		}}
	>
		<div className={classes.drawerHeader}>
			<IconButton onClick={handleDrawerClose}>
				<CloseIcon className="icon" />
			</IconButton>
		</div>

		<Divider />

		<List className="text-center">
			<img 
				src={Logo}
				alt="logo"
				className="img-logo"
				style={{width: '90px', height: '90px'}}
			/>
		</List>

		<Divider className="my-3" />

		<List
			className="d-flex flex-column align-items-center justify-content-center px-4" dense
		>
			<div className="d-flex align-items-center mb-3">
				<Avatar style={{backgroundColor: '#572845'}}>OV</Avatar>
				{console.log(dataUser)}
				<Typography
					variant="body1"
					component="span"
					className="ml-2"
				>
					Omar Vargas
				</Typography>
			</div>

			<Button
				variant="contained"
				color="secondary"
				className='mt-3 mb-4'
				endIcon={<AddIcon />}
				onClick={createTask}
			>
		  		Crear tarea
			</Button>

			<div onClick={logout}>
				<Typography
					variant="body1"
					component="span"
					className="ml-2"
				>
					Salir
				</Typography>

				<MeetingRoomIcon color="secondary" />
			</div>
		</List>
	</Drawer>
)

export default DrawerComponent;