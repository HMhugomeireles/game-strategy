import { Schema, model } from 'mongoose';
import PlayerInterface from './../interfaces/player/player.interface';

const PlayerSchema = new Schema({
  uid: String,
  nick: String,
}, {
  timestamps: true
});

export default model<PlayerInterface>('Player', PlayerSchema);