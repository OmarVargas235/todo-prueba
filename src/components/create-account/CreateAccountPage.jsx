import React from 'react';

import { RegisterContainer } from './style';
import InputPassword from '../../layaut/InputPassword';
import { CssTextField } from '../../utils/styleMaterialUi';

import { Container, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

// const CreateAccountPage = ({ classes, desactiveBtn, history, handleChange, isRequired, matches, registerUser, theme }) => (
const CreateAccountPage = ({ history, handleChange, isRequired, matches, registerUser, theme }) => (
	<RegisterContainer className="d-flex align-items-center p-3">
		<Container maxWidth="xs" className="container p-5">
			<h4 className="pl-1 mb-4 text-center">Completa tus datos</h4>

			<ThemeProvider theme={theme}>
				<form 
					// className='p-5 d-flex flex-column align-items-center d-sm-block' 
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
							// disabled={desactiveBtn}
						>
					  		Crear
						</Button>

						<Button
							color="primary"
							className={`${matches ? 'w-100' : ''}`}
							// disabled={desactiveBtn}
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