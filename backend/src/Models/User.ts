import { Schema, model } from 'mongoose';
import Util from './../util/utility'
import UserInterface from './interfaces/user/user.interface';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  lastLogin: { type: Date, default: Date.now() }
}, {
  timestamps: true
});

export default model<UserInterface>('User', UserSchema);
