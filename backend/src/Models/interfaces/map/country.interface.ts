import { Document } from 'mongoose';
import Player from './../player/player.interface';

export default interface Country extends Document {
    /**
   * Definition of Proprieties
   */
  uid: string;
  name: string;


  /**
   * Definition of Methods
   */
}