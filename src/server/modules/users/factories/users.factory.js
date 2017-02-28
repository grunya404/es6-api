'use strict';

import User from '../schemas/user.schema';

export default {
	getAll: () => {
		return User.find();
	},
	createUser: () => {
		const newUser = new User({
			name: 'Giank',
			email: 'g.otarolarobledo@gmail.com',
			phone: '+56950159602',
			location: 'de por ahi!'
		});
		return newUser.save();
	}
};