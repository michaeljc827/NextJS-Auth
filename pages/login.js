import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userLogin } from '../lib/UserAuthorization';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	static async getInitialProps(ctx) {
		console.log(ctx);
		return {};
	}

	submitForm = async (values) => {
		const email = values.email;
		const password = values.password;

		/*TODO: Validation*/

		if (email && password) {
			const error = await userLogin(email, password);
		}
	};

	render() {
		return (
			<div id="login-container">
				<h1>Login</h1>
				<Formik
					initialValues={{ email: 'michaeljc827@hotmail.com', password: 'password' }}
					onSubmit={(values) => this.submitForm(values)}
				>
					<Form>
						<p>Email:</p>
						<Field type="email" name="email" className="form-control" />
						<p>Password:</p>
						<Field type="password" name="password" className="form-control" />
						<button type="submit" className="form-control">
							Login
						</button>
					</Form>
				</Formik>
			</div>
		);
	}
}
