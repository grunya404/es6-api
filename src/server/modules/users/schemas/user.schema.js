'use strict';
import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	location: String,
});

export default mongoose.model('User', UserSchema)