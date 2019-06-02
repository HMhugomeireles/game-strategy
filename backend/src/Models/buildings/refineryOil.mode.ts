import { Schema, model, Document } from 'mongoose';

export interface RefineryOil {

}

const RefineryOilSchema = new Schema({
  position: {
    col: { type: Number },
    row: { type: Number }
  },
  level: { type: Number, default: 1 },
  resistance: { type: Number, default: 1000 },
  nWorkerSlots: { type: Number, default: 8 },
  timeBuild: { type: Number, default: 20 },
  toReBuild: { type: Number, default: 1000 },
  inWreckage: { type: Boolean, default: false }
}, {
  timestamps: true
});

export const refineryOilModel = model<RefineryOil & Document>('RefineryOil', RefineryOilSchema);
