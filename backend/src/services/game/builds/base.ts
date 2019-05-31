import BuildingAbstract from './building';
import TypeCreation from '../typesCreation';
import WorkerCharacter from './../characters/workerCharacter';
import TypeBuildingState from './typeBuildingState';

//import baseBuildingSheetDB from '';
import playerGameSaveSheet from '';
import FactoryCharacter from './../factory/characterFactory';
import TypeCharacter from '../characters/typeCharacter';
import TypeBuilding from './TypeBuilding';

class Base extends BuildingAbstract {
  private buildingState: [TypeBuildingState, number];
  private upgrade: [boolean, WorkerCharacter];
  private sheetBuilding: any;

  public constructor(
    _id: string,
    cityPosition: [number, number], 
    position: [number, number], 
    level: number, 
    resistance: [number, number ], 
    nWorkerSlots: number,
    typeCreation: TypeCreation,
    ) {
    super(_id,cityPosition,position,level,resistance,nWorkerSlots,typeCreation);
  }

  public upgradeBuilding() {
    super.updateLevel(super.getLevel() + 1);
  }

  public produceWorker() {
    // call the factory for create worker 
    return FactoryCharacter.createCharacter(TypeCharacter.WORKER, playerGameSaveSheet, TypeBuilding.BASE);
  }


}

export default Base;
