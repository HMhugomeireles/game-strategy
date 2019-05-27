import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './interfaces/user/user.interface';
import { NextFunction } from 'express';

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		lastLogin: { type: Date, default: Date.now() }
	},
	{
		timestamps: true
	}
);

UserSchema.pre('save', function(next: NextFunction) {
	this.password = bcrypt.hashSync(this.password, 10);
	next();
});

UserSchema.methods.comparePassword = (passPlanText: string, callback: Function): boolean => {
	return callback(null, bcrypt.compare(passPlanText, this.password));
};

const userModel = model<User & Document>('User', UserSchema);
export default userModel;
