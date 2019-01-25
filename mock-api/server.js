var express = require('express');
var bodyParser = require('body-parser');
var bearerToken = require('express-bearer-token');
var routes = require('./routes.js');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bearerToken());

routes(app);

var server = app.listen(4000, function() {
	console.log('app running on port.', server.address().port);
});
