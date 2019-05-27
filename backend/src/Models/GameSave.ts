import { Schema, model } from 'mongoose';
import GameSaveInterface from './interfaces/game/gameSave.interface';

const GameSaveSchema = new Schema({
  playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
  resources: {
    wood: { type: Number, default: 0 },
    food: { type: Number, default: 0 },
    iron: { type: Number, default: 0 },
    oil: { type: Number, default: 0 },
    stone: { type: Number, default: 0 },
    water: { type: Number, default: 0 },
  },
  characters: {
    workers: {
      nWorkers: { type: Number, default: 1 },
      features: {
        level: { type: Number, default: 0 },
        speed: { type: Number, default: 0 },
        energyExperience: { type: Number, default: 0 },
        resourcesExperience: { type: Number, default: 0 },
        buildingExperience: { type: Number, default: 0 },
      }
    }
  },
  buildings: {
    base: {
      nBuildings: { type: Number, default: 0 },
      level: { type: Number, default: 0 },
      position: {
        x: { type: Number, default: 0 },
        y: { type: Number, default: 0 },
      }
    },
    resourcesBuildings: {
      wood: {
        nBuilders: { type: Number, default: 0 },
        level: { type: Number, default: 0 },
      }
    }
  },
}, {
  timestamps: true
});

export default model<GameSaveInterface>('GameSave', GameSaveSchema)