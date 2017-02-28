'use strict';

import userRoutes from '../modules/users/routes/users.route';

export default (app) => {
	app.use(userRoutes);
};