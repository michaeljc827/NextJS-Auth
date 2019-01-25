import { getCurrentUser } from '../services/UsersAPI';
import { getCookie } from '../lib/Session';
import { getJwt } from '../lib/Token';

export default class Account extends React.Component {
	static async getInitialProps(ctx) {
		/*Get token*/
		const jwt = getJwt(ctx);
		/*Request current user from API*/
		const res = await getCurrentUser(jwt);
		const currentUser = res.data;

		return {
			user: currentUser
		};
	}

	render() {
		return (
			<div>
				<h1>My Account</h1>
				<h2>{this.props.user.username}</h2>
				<h3>{this.props.user.name}</h3>
				<h3>{this.props.user.email}</h3>
			</div>
		);
	}
}
