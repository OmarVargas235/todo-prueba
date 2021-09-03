import React, { useState } from 'react';

// import { CssOutlinedInput } from '../utils/styleMaterialUi';

import { IconButton, FormControl,InputLabel,OutlinedInput,InputAdornment } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const InputPassword = ({ handleChange, isRequired, text, typeName }) => {

	const [showPassword, setShowPassword] = useState(false);

	return (
		<FormControl
			variant="outlined"
			className='mb-3 password'
			error={isRequired[typeName]}
		>
			<InputLabel
				color="secondary"
				style={{color: 'white'}}
				error={isRequired.password}
				htmlFor="outlined-adornment-password"
				required
			>{text}</InputLabel>

			<OutlinedInput
				type={showPassword ? 'text' : 'password'}
				onChange={handleChange}
				name={typeName}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={() => setShowPassword(!showPassword)}
							onMouseDown={e => e.preventDefault()}
							edge="end"
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
				labelWidth={70}
			/>
		</FormControl>
	)
}

export default InputPassword;