import * as mongoose from 'mongoose'

const PlayerSchema = new mongoose.Schema({
  accountId: mongoose.Schema.Types.ObjectId,
  name: mongoose.Schema.Types.String,
  avatar: mongoose.Schema.Types.String
}, 
{
  versionKey: false,
  timestamps: true
})

export default mongoose.model('Player', PlayerSchema);