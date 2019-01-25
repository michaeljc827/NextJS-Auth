import { setCookie, getCookie } from './Session';

export const getJwt = (ctx) => {
	return getCookie('jwt', ctx.req);
};

export const isAuthenticated = (ctx) => !!getJwt(ctx);

export const redirectIfNotAuthenticated = (ctx) => {
	if (!isAuthenticated(ctx)) {
		redirect('/auth/login', ctx);
		return true;
	}
	return false;
};
