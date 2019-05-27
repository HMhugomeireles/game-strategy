import { Schema, model } from 'mongoose';
import Util from './../util/utility';
import LandInterface from './interfaces/map/land.interface';

export const LandSchema = new Schema(
	{
    idCity: { type: Schema.Types.ObjectId, ref: 'City' },
    idPlayer: { type: Schema.Types.ObjectId, ref: 'Player' },
		uid: {
			type: String,
			default: Util.createNewUID()
		},
		positionCol: {
			type: Number,
			required: true
		},
		positionRow: {
			type: Number,
			required: true
		},
		occupation: {
			type: Schema.Types.Boolean,
			default: false
		}
	},
	{
		timestamps: true
	}
);

export default model<LandInterface>('Land', LandSchema);
