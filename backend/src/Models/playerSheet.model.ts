import { Schema, model, Document } from 'mongoose';

import { carpentryModel } from './buildings/carpentry.model';
import { slaughterModel } from './buildings/slaughter.model';
import { ironHouseModel } from './buildings/ironHouse.model';
import { refineryOilModel } from './buildings/refineryOil.mode';
import { refineryGoldModel } from './buildings/refineryGold.model';
import { quarryModel } from './buildings/quarry.model';
import { waterWellModel } from './buildings/waterWell.mode';

import { workerModel } from './characters/worker.model';
//import {  } from './characters';

const PlayerSheetSchema = new Schema({
  idPlayer: { type: Schema.Types.ObjectId, ref: 'Player' },
  resources: {
    wood: { type: Number, default: 5000 },
    food: { type: Number, default: 250 },
    iron: { type: Number, default: 50 },
    oil: { type: Number, default: 0 },
    stone: { type: Number, default: 1000 },
    water: { type: Number, default: 2000 },
  },
  buildings: {
    base : {
      position: {
        col: { type: Number },
        row: { type: Number }
      },
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 1000 },
      nWorkerSlots: { type: Number, default: 8 },
      timeBuild: { type: Number, default: 20 },
      toReBuild: { type: Number, default: 1000 },
      price: {
        wood: { type: Number, default: 3000 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 50 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 500 },
      },
      isBuild: { type: Boolean, default: false },
      inWreckage: { type: Boolean, default: false }
    },
    carpentry : {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      nWorkerSlots: { type: Number, default: 10 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCollectInTime: {type: Number, default: 150},
      price: {
        wood: { type: Number, default: 3000 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 50 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 500 },
      },
      listBuilds: { type: [carpentryModel], default: [] }
    },
    slaughterHouse: {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      nWorkerSlots: { type: Number, default: 10 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCollectInTime: {type: Number, default: 100},
      price: {
        wood: { type: Number, default: 3000 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 50 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 500 },
      },
      listBuilds: { type: [slaughterModel], default: [] }
    },
    ironHouse: {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      nWorkerSlots: { type: Number, default: 10 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCollectInTime: {type: Number, default: 60},
      price: {
        wood: { type: Number, default: 3000 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 50 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 500 },
      },
      listBuilds: { type: [ironHouseModel], default: [] }
    },
    refineryOil: {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      nWorkerSlots: { type: Number, default: 10 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCollectInTime: {type: Number, default: 30},
      price: {
        wood: { type: Number, default: 3000 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 50 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 500 },
      },
      listBuilds: { type: [refineryOilModel], default: [] }
    },
    refineryGold: {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      nWorkerSlots: { type: Number, default: 10 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCollectInTime: {type: Number, default: 30},
      price: {
        wood: { type: Number, default: 3000 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 50 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 500 },
      },
      listBuilds: { type: [refineryGoldModel], default: [] }
    },
    quarry: {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      nWorkerSlots: { type: Number, default: 10 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCollectInTime: {type: Number, default: 100},
      price: {
        wood: { type: Number, default: 3000 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 50 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 500 },
      },
      listBuilds: { type: [quarryModel], default: [] }
    },
    waterWell: {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      nWorkerSlots: { type: Number, default: 10 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCollectInTime: {type: Number, default: 110},
      price: {
        wood: { type: Number, default: 3000 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 50 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 500 },
      },
      listBuilds: { type: [waterWellModel], default: [] }
    },
    armyHouse: {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      nWorkerSlots: { type: Number, default: 10 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCreateTime: {type: Number, default: 10000},
      price: {
        wood: { type: Number, default: 1400 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 900 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 170 },
      },
      isBuild: { type: Number, default: false }
    },
    militaryAcademy: {
      level: { type: Number, default: 1 },
      resistance: { type: Number, default: 300 },
      timeBuild: { type: Number, default: 10 },
      toReBuild: { type: Number, default: 500 },
      valueCreateTime: {type: Number, default: 100000 },
      isBuild: { type: Number, default: false },
      onTraining: { 
        nMax: { type: Number, default: 0 },
        list: { type: [cadetModel], default: [] }
      },
      price: {
        wood: { type: Number, default: 1400 },
        food: { type: Number, default: 200 },
        iron: { type: Number, default: 900 },
        stone: { type: Number, default: 600 },
        water: { type: Number, default: 170 },
      }
    }
  },
  characters: {
    Worker: {
      timeCreation: { type: Number, default: 2 },
      level: { type: Number, default: 1 },
      speed: { type: Number, default: 0 },
      energyExperience: { type: Number, default: 0 },
      resourcesExperience: { type: Number, default: 0 },
      buildingExperience: { type: Number, default: 0 },
      workersList: { type: [workerModel], default: []}
    }
  }
},{
  timestamps: true
});

interface PlayerSheet {

}

export const playerSheetModel = model<PlayerSheet & Document>('PlayerSheet', PlayerSheetSchema);
