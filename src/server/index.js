/* @flow */

import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import db from './config/db';
import logger from './config/log';
import routes from './config/routes';

const app = express();
const upload = multer();


app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(logger.init());
routes(app);

app.listen(3000, '0.0.0.0',() => {
	db.connect(logger.getLogger(), () =>{
		console.log('--');
		console.log('API');
		console.log('===================');
		console.log('Running on:                       http://0.0.0.0:3000');
	});
});

export default app;