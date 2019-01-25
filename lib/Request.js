import axios from 'axios';

/*TODO: change api host to env variable*/
const API_HOST = 'http://127.0.0.1:4000';

const getUrl = (endpoint) => API_HOST + endpoint;

export const post = async (endpoint, data) => {
	return axios.post(getUrl(endpoint), data, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

export const get = async (endpoint, jwt) => {
	const headers = jwt
		? {
				headers: { Authorization: `Bearer ${jwt}` }
			}
		: null;
	return axios.get(getUrl(endpoint), headers);
};
