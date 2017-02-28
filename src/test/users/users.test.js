process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server/index';

let should = chai.should();
let User = require('../../server/modules/users/schemas/user.schema.js');

chai.use(chaiHttp);

describe('Users', () => {
	describe('/GET user', () => {
		it('it should GET all the users', (done) => {
			chai.request(server)
				.get('/users')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(1);
					done();
				});
		});
	});

});