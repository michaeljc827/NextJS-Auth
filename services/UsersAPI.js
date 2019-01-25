import { get } from '../lib/Request';

export const getCurrentUser = (jwt) => {
	return get('/users/current', jwt);
};
