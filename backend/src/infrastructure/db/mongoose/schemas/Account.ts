import * as mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  firstName: mongoose.Schema.Types.String,
  lastName: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  accountState: {
    type: mongoose.Schema.Types.String,
    enum: ['Verify', 'Not verify'],
    default: 'Not verify'
  },
  agreeOnSendPubEmail: { 
    type: mongoose.Schema.Types.Boolean,
    default: false
  }
}, 
{
  versionKey: false,
  timestamps: true
})

export default mongoose.model('Account', AccountSchema);