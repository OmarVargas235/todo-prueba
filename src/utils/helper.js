import Swal from 'sweetalert2';
import gql from "graphql-tag";
// import { requestWithoutToken } from './fetch';
// import { alert } from './alert';

// export const signOff = async (dataUser, dispatch) => {

// 	const { uid } = dataUser;
// 	const resp = await requestWithoutToken('logout-user', {id: uid}, 'POST');
// 	const { ok, messages } = resp;

// 	if (!ok) return alert('error', messages);
	
// 	dispatch( logoutUser() );
// 	alert('success', messages);
// }

export const inputsTasks = async (title, data={name: '', description: ''}) => {
	
	const { name, description } = data;

	const { value: formValues } = await Swal.fire({
		title,
		html:
		`<input value="${name}" placeholder="Nombre" id="swal-input1" class="swal2-input">
		<input value="${description}" placeholder="Descripcion" id="swal-input2" class="swal2-input">`,
		focusConfirm: false,
		preConfirm: (text) => {

			return [
				document.getElementById('swal-input1').value,
				document.getElementById('swal-input2').value
			]
		}
	});
	
	return formValues ? formValues : [];
}

export const TODO_LIST_QUERY = gql`
	query TodoAppList {
		todosAppsList(orderBy: [completed_ASC, createdAt_DESC]) {
			items {
				id
				name
				description
				completed
				date
			}
		}
	}
`;