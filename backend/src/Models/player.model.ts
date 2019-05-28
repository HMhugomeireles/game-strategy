import mongoose, { Schema, model, Document } from 'mongoose';
import Util from './../util/utility';
import Player from './interfaces/player/player.interface';

const PlayerSchema = new Schema(
	{
		idUser: { type: Schema.Types.ObjectId, ref: 'User' },
		uid: { type: String, default: Util.createNewUID() },
		nick: { type: String, required: true },
		worldRoom: {
			type: String,
			default: ''
		},
		countryRoom: {
			type: String,
			default: ''
		},
		cityRoom: {
			type: String,
			default: ''
		},
		level: { type: Number, default: 0 },
		experience: { type: Number, default: 0 }
	},
	{
		timestamps: true
	}
);

const PlayerModel = model<Player & Document>('Player', PlayerSchema);

export default PlayerModel;
