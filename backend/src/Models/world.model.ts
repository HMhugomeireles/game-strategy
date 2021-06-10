import { Schema, model, Document } from 'mongoose';
import Util from '../util/utility';
import World from './interfaces/map/world.interface';

const WorldSchema = new Schema(
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

const worldModel = model<World & Document>('World', WorldSchema);

export default worldModel;
