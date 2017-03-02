/* @flow */

import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import db from './config/db';
import logger from './config/log';
import routes from './config/routes';
import environments from './config/env/index';

const app = express();
const upload = multer();
const env = environments.env();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(logger.init());
routes(app);

app.listen(3000, '0.0.0.0',() => {
	db.connect(env, logger.getLogger(), () =>{
		console.log('--');
		console.log('API');
		console.log('===================');
        console.log('Running on:                       http://0.0.0.0:3000');
        console.log(`Datatbase on:                     mongodb://${env.db.host}:${env.db.port}/${env.db.db}`);
	});
});

export default app;