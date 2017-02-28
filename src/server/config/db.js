'use strict';

import mongoose from 'mongoose';
mongoose.Promise = Promise;

export default {
	connect: (env, logger, cb) => {
		mongoose.connect(`mongodb://${env.db.host}:${env.db.port}/${env.db.db}`, (err, db) => {
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