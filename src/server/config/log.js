'use strict';

import log4js from 'log4js';

log4js.configure({
	appenders: [
		{
			type: 'console'
		},
		{
			type: 'file',
			filename: 'cheese.log',
			category: 'cheese'
		}
	]
});
const logger = log4js.getLogger('cheese');
logger.setLevel('INFO');

export default {
	init: () => {
		return log4js.connectLogger(logger, {
			level: log4js.levels.INFO
		});
	},
	getLogger: () => {
		return logger;
	}
};