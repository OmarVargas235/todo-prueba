export const requestWithoutToken = async (url = "", formData={}) => {

	const resp = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${url}`, {
		method: 'POST',
		headers: {
	      'Content-Type':'application/json',
		},
		body: JSON.stringify(formData),
	});
	const data = await resp.json();
	
	return data;
}