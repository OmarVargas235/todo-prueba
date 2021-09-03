import React from 'react';

import { RegisterContainer } from './style';
import InputPassword from '../../layaut/InputPassword';
import { CssTextField, theme } from '../../utils/styleMaterialUi';

import { Container, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

const CreateAccountPage = ({ history, handleChange, isRequired, matches, registerUser }) => (
	<RegisterContainer className="d-flex align-items-center p-3">
		<Container maxWidth="xs" className="container p-5">
			<h4 className="pl-1 mb-4 text-center">Crear cuenta</h4>

			<ThemeProvider theme={theme}>
				<form 
					className='d-flex flex-column' 
					noValidate 
					autoComplete="off"
					onSubmit={registerUser}
				>
					<CssTextField
						label="Nombre"
						color="primary"
						className="mb-3"
						name="name"
						onChange={handleChange}
						error={isRequired.name}
						helperText={isRequired.name ? "El nombre es obligatorio." : ""}
						required
						InputLabelProps={{ style: { color: '#fff' } }}
					    InputProps={{ style: { color: '#fff' } }}
						variant="outlined"
					/>

					<CssTextField
						label="Apellido"
						color="primary"
						className="mb-3"
						name="lastName"
						onChange={handleChange}
						error={isRequired.lastName}
						helperText={isRequired.lastName ? "El apellido es obligatorio." : ""}
						required
						InputLabelProps={{ style: { color: '#fff' } }}
					    InputProps={{ style: { color: '#fff' } }}
						variant="outlined"
					/>

					<CssTextField
						label="Email"
						color="primary"
						className="mb-3"
						name="email"
						onChange={handleChange}
						error={isRequired.email}
						helperText={isRequired.email ? "El email es obligatorio." : ""}
						required
						InputLabelProps={{ style: { color: '#fff' } }}
					    InputProps={{ style: { color: '#fff' } }}
						variant="outlined"
					/>

					<InputPassword
						handleChange={handleChange}
						isRequired={isRequired}
						text="Password"
						typeName="password"
					/>

					<InputPassword
						handleChange={handleChange}
						isRequired={isRequired}
						text="Repetir password"
						typeName="repeatPassword"
					/>

					<div className="mt-4 w-100">
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={`mr-3 ${matches ? 'w-100 mb-3' : ''}`}
						>
					  		Crear
						</Button>

						<Button
							color="primary"
							className={`${matches ? 'w-100' : ''}`}
							onClick={() => history.goBack()}
						>
					  		Regresar
						</Button>
					</div>
				</form>
			</ThemeProvider>
		</Container>
	</RegisterContainer>
)

export default CreateAccountPage;