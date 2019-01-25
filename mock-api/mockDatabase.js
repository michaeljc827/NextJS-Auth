var mockData = [
	{
		id: '1',
		name: 'Michael Chavez',
		username: 'Michaeljc827',
		email: 'michaeljc827@hotmail.com',
		password: 'password'
	},
	{
		id: '2',
		name: 'Bob Dude',
		username: 'bobthedude',
		email: 'bobbydude@yahoo.com',
		password: 'burrito'
	}
];

var MockDatabase = (module.exports = {
	selectUser(id) {
		for (var i in mockData) {
			if (mockData[i].id == id) {
				return mockData[i];
			}
		}
		return null;
	},
	authorizeUser(email, password) {
		for (var i in mockData) {
			if (mockData[i].email == email && mockData[i].password == password) {
				return mockData[i];
			}
		}
		return null;
	}
});
