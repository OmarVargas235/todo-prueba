import React from 'react';
import moment from 'moment';

import { CssCheckbox } from '../../../utils/styleMaterialUi';
import { withToggleTodo } from '../../../HOC/withToggleTodo';

import { TableRow, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const TaskPage = ({ data, deleteTask, editTask, toggleTodo }) => (
	<StyledTableRow>
		<StyledTableCell component="th" scope="row" align="center">
			<CssCheckbox
				checked={data.completed}
				onChange={ () => toggleTodo({ id: data.id, completed: !data.completed })}
				inputProps={{ 'aria-label': 'secondary checkbox' }}
			/>
		</StyledTableCell>

		<StyledTableCell
			align="center"
			className={data.completed ? 'text-decoration__line-through': ''}
		>
			{ data.name }
		</StyledTableCell>
		
		<StyledTableCell align="center">{ data.description }</StyledTableCell>

		<StyledTableCell align="center">
			{ moment(data.date, "YYYYMMDD").format('LL') }
		</StyledTableCell>

		<StyledTableCell align="center">
			<span>	
				<EditIcon
					className="mr-3 pointer"
					style={{fill: '#572845'}}
					onClick={editTask}
				/>

				<DeleteIcon
					className="pointer"
					style={{fill: '#572845'}}
					onClick={deleteTask}
				/>	
			</span>
		</StyledTableCell>
	</StyledTableRow>
)

export default withToggleTodo(TaskPage);