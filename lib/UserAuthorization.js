import Redirect from '../lib/Redirect';
import { post } from '../lib/Request';
import { setCookie } from '../lib/Session';

export const userLogin = async (email, password) => {
	/*Authenticate user with server*/
	const res = await post('/user-token', {
		email: email,
		password: password
	});
	/*Set cookie with JWT if authorized*/
	if (!res.data.jwt) {
		alert('No jwt');
		return null;
	}
	setCookie('jwt', res.data.jwt);

	/*redirect user to '/account' */
	Redirect('/account');
	return null;
};
