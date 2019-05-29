import { Schema, model, Document } from 'mongoose';
import GameSave from './interfaces/game/gameSave.interface';

const GameSaveSchema = new Schema({
  idPlayer: { type: Schema.Types.ObjectId, ref: 'Player' },
  resources: {
    wood: { type: Number, default: 0 },
    food: { type: Number, default: 0 },
    iron: { type: Number, default: 0 },
    oil: { type: Number, default: 0 },
    stone: { type: Number, default: 0 },
    water: { type: Number, default: 0 },
  },
  characters: {
    worker: {
      nWorkers: { type: Number, default: 1 },
      features: {
        level: { type: Number, default: 1 },
        speed: { type: Number, default: 1 },
        energyExperience: { type: Number, default: 0 },
        resourcesExperience: { type: Number, default: 0 },
        buildingExperience: { type: Number, default: 1 },
      }
    },
    army:{
      officers: {
        cadet:{
          nCadet: { type: Number, default: 0},
          features: {
            level: { type: Number, default: 0 },
            speed: { type: Number, default: 0 },
            attack: { type: Number, default: 0 },
            amour: { type: Number, default: 0 },
            shield: { type: Number, default: 0 },
            weapon: {
              damage: { type: Number, default: 0 },
              amourPenetration: { type: Number, default: 0},
              level: { type: Number, default: 0 }
            }
          }
        },
        candidate:{
          nCandidate: { type: Number, default: 0},
          features: {
            level: { type: Number, default: 0 },
            speed: { type: Number, default: 0 },
            attack: { type: Number, default: 0 },
            amour: { type: Number, default: 0 },
            shield: { type: Number, default: 0 },
            weapon: {
              damage: { type: Number, default: 0 },
              amourPenetration: { type: Number, default: 0},
              level: { type: Number, default: 0 }
            }
          }
        }
      },
      nonOfficers: {
        soldier:{
          nSoldier: { type: Number, default: 0},
          features: {
            level: { type: Number, default: 0 },
            speed: { type: Number, default: 0 },
            attack: { type: Number, default: 0 },
            amour: { type: Number, default: 0 },
            shield: { type: Number, default: 0 },
            weapon: {
              damage: { type: Number, default: 0 },
              amourPenetration: { type: Number, default: 0},
              level: { type: Number, default: 0 }
            }
          }
        },
        corporal:{
          nCorporal: { type: Number, default: 0},
          features: {
            level: { type: Number, default: 0 },
            speed: { type: Number, default: 0 },
            attack: { type: Number, default: 0 },
            amour: { type: Number, default: 0 },
            shield: { type: Number, default: 0 },
            weapon: {
              damage: { type: Number, default: 0 },
              amourPenetration: { type: Number, default: 0},
              level: { type: Number, default: 0 }
            }
          }
        }
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

const gameSaveModel = model<GameSave & Document>('GameSave', GameSaveSchema)

export default gameSaveModel;