import { Schema, model, Document } from 'mongoose';
import Util from '../util/utility';
import Land from './interfaces/map/land.interface';

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

const landModel = model<Land & Document>('Land', LandSchema);

export default landModel;
