import { Schema, model } from 'mongoose';
import Util from './../util/utility';
import PlayerInterface from './interfaces/player/player.interface';

const PlayerSchema = new Schema({
		uid: { type: String, default: (): string => Util.createNewUID() },
		nick: { type: String, required: true },
		email: {
      type: String,
			required: true
		},
    password: {
      type: String,
      required: true
    },
		worldRoom: {
			type: String,
			required: true
		},
		countryRoom: {
			type: String,
			required: true
		},
		cityRoom: {
			type: String,
			required: true
    },
    level: { type: Number },
    experience: { type: Number },
		lastLogin: {
			type: Date,
			default: Date.now()
		}
	}, {
		timestamps: true
	}
);

export default model<PlayerInterface>('Player', PlayerSchema);
