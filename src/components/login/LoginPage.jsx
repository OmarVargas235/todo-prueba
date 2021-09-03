import React from 'react';

import { LoginContainer } from './style';
import { CssTextField, CssCheckbox } from '../../utils/styleMaterialUi';
import InputPassword from '../../layaut/InputPassword';

import { Container, Button, FormControlLabel } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const LoginPage = ({ checked, formData, history, handleChange, login, setChecked, theme }) => (
	<LoginContainer className="d-flex align-items-center px-3">
		<Container maxWidth="xs" className="container p-5">
			<h4 className="pl-1 mb-4 text-center">Iniciar sesion</h4>
			
			<ThemeProvider theme={theme}>
				<form
					noValidate
					autoComplete="off"
					className="d-flex flex-column"
					onSubmit={login}
				>
					<CssTextField
						defaultValue={formData.email}
						InputLabelProps={{ style: { color: '#fff' } }}
					    InputProps={{ style: { color: '#fff' } }}
						label="Email"
						variant="outlined"
						color="secondary"
						// color={isRequired.email ? "primary" : "secondary"}
						className="mb-4"
						name="email"
						onChange={handleChange}
						// error
						// helperText={isRequired.email ? "El email es obligatorio." : ""}
						required
					/>

					<InputPassword
						handleChange={handleChange}
						isRequired={true}
						text="Password"
						typeName="password"
					/>

					<FormControlLabel
						control={
							<CssCheckbox
								checked={checked}
								color="primary"
								onChange={event => setChecked(event.target.checked)}
								inputProps={{ 'aria-label': 'secondary checkbox' }}
							/>
						}
						label="Recordar"
					/>

					<div className="mt-4">
						<Button 
							variant="contained"
							color="primary"
							className="mr-3 w-100"
							type="submit"
							// disabled={desactiveBtn}
						>
					  		Iniciar
						</Button>

						<Button
							color="primary"
							className="w-100 mt-4"
							// disabled={desactiveBtn}
							onClick={() => history.push('/crear-cuenta')}
						>
					  		Registrarse
						</Button>
					</div>
				</form>
			</ThemeProvider>
		</Container>
	</LoginContainer>
)

export default LoginPage;