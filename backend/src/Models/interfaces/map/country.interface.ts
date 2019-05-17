import Player from './../player/player.interface';

export default interface Country {
    /**
   * Definition of Proprieties
   */
  uid: string;
  name: string;
  idPlayer: Array<Player>;


  /**
   * Definition of Methods
   */
}