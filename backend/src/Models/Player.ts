import { Schema, model } from 'mongoose';
import Util from './../util/utility';
import PlayerInterface from './interfaces/player/player.interface';

const PlayerSchema = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: 'User'},
  uid: { type: String, default: Util.createNewUID() },
  nick: { type: String, required: true },
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
}, {
  timestamps: true
});

export default model<PlayerInterface>('Player', PlayerSchema);
