import { Schema, model, Document } from 'mongoose';

export interface Worker {

}

const WorkerSchema = new Schema({
  position: {
    col: { type: Number },
    row: { type: Number }
  },
  timeCreation: { type: Number, default: 2 },
  level: { type: Number, default: 1 },
  speed: { type: Number, default: 0 },
  energyExperience: { type: Number, default: 0 },
  resourcesExperience: { type: Number, default: 0 },
  buildingExperience: { type: Number, default: 0 }
}, {
  timestamps: true
});

export const workerModel = model<Worker & Document>('Worker', WorkerSchema);
