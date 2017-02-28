'use strict';

import userFactories from '../factories/users.factory';

export default {
	list: (req, res) => {
		userFactories.getAll()
			.then((_users) => {
				res.send(_users);
			}).catch(() => {

			});
	},
	create: (req, res) => {
		userFactories.createUser()
			.then((_users) => {
				res.send('bien');
			}).catch(() => {

		});
	}
};