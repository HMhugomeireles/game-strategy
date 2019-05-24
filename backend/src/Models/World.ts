import { Schema, model } from 'mongoose';
import Util from './../util/utility';
import WorldInterface from './interfaces/map/world.interface';

export const WorldSchema = new Schema(
	{
		uid: {
			type: String,
			default: Util.createNewUID()
		},
		name: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

export default model<WorldInterface>('World', WorldSchema);
