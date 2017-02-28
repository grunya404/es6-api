'use strict';

import mongoose from 'mongoose';
mongoose.Promise = Promise;

export default {
	connect: (logger, cb) => {
		mongoose.connect('mongodb://localhost:27017/mern-dev', (err, db) => {
			if (err) {
				logger.error(err);
			}else{
				cb();
			}
		});
	},
	disconnect: () => {
		mongoose.connection.close();
	}
};