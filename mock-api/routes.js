const mockData = require('./mockdata');

const mockDatabase = require('./mockDatabase');

/*TODO: make this env variable*/
const tokenSecret = 'secret';

var jwt = require('jsonwebtoken');

var appRouter = function(app) {
	app.get('/', function(req, res) {
		res.status(200).send(' { "error" : "Please specify an end point." } ');
	});

	app.post('/user-token', function(req, res) {
		console.log('POST: /user-token');

		const user = mockDatabase.authorizeUser(req.body.email, req.body.password);
		console.log(user);
		if (!user) {
		} else {
			var token = {
				jwt: jwt.sign({ userId: user.id }, tokenSecret)
			};
			res.status(200).send(JSON.stringify(token));
		}
	});

	app.get('/users/current', function(req, res) {
		console.log('GET: /users/current');
		/*Verify and decode the JWT to determine current user id*/
		const userJwt = req.token;
		const decodedJwt = jwt.verify(userJwt, tokenSecret);

		/*Set currentUserId to the id inside of the jwt*/
		let currentUserId = decodedJwt.userId;

		const user = mockDatabase.selectUser(currentUserId);

		if (!user) {
			res.status(404).send(JSON.stringify(null));
		} else {
			res.status(200).send(JSON.stringify(user));
		}
	});

	app.get('/users/:id', function(req, res) {
		console.log('GET: /users/id');
		if (!req.params['id']) {
			res.status(500).send('Missing params');
		}

		const user = mockDatabase.selectUser(req.params['id']);

		if (!user) {
			res.status(404).send('User not found.');
		} else {
			res.status(200).send(JSON.stringify(user));
		}
	});
};

module.exports = appRouter;
