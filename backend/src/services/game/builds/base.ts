import { Gamei18n } from './../i18n_Game';
import BuildingAbstract from './building';
import WorkerCharacter from './../characters/workerCharacter';

//import baseBuildingSheetDB from '';
import FactoryCharacter from './../factory/characterFactory';
import TypeCharacter from '../characters/typeCharacter';
import TypeBuilding from './TypeBuilding';
import PlayerSheet from '../player/playerSheet';

class Base extends BuildingAbstract {
  private typeCharacter: TypeCharacter = TypeCharacter.WORKER;
  private upgrade: [boolean, WorkerCharacter];
  

  public constructor(
    _id: string,
    cityPosition: [number, number], 
    position: [number, number], 
    level: number, 
    resistance: [number, number ], 
    nWorkerSlots: number,
    playerSheet: PlayerSheet
    ) {
    super(_id,cityPosition,position,level,resistance,nWorkerSlots,playerSheet);
  }

  public produceWorker() {
    // call the factory for create worker 
    // not finish
    return FactoryCharacter.createCharacter(this.typeCharacter, super.getPlayerSheet(), TypeBuilding.BASE);
  }

}

export default Base;
