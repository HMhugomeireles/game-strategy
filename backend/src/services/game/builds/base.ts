import { Gamei18n } from './../i18n_Game';
import BuildingAbstract from './building';
import WorkerCharacter from './../characters/workerCharacter';
import FactoryCharacter from './../factory/characterFactory';
import TypeCharacter from '../characters/typeCharacter';
import TypeBuilding from './TypeBuilding';
import PlayerSheet from '../player/playerSheet';
import TypesBuildingState from './typeBuildingState';
import MathFormulas from './../mathematics/mathFormulas';

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

  /**
   * Make the levelup of the building
   * if have workers in the building and
   * the building is on state standby mode
   * 
   * @returns {string}
   * Return the message 
   */
  public updatingBuilding(): string {
    const typeState = 0;
    const timeState = 1;
    const builderState: [TypesBuildingState , number] = super.getState();

    if (builderState[typeState] !== TypesBuildingState.STANDBY) {
      return `${Gamei18n.en.BUILDING_BUSY}`;
    }
    // Not possible put working without worker
    if(super.getWorkerListOnBuilding.length === 0) {
      return `${Gamei18n.en.BUILDING_DONT_HAVE_WORKER}`;
    }

    // calc the time to upgrade
    let setState: [TypesBuildingState, number];
    let calcTime: number = 0;

    // get base time from gameSheet
    // get current level
    // get numbers of works in the building
    // get from playerSheet the experience of works

    // Make the calculation 
    calcTime = MathFormulas.calcTimeToUpgradeBuilding();

    setState = [TypesBuildingState.UPDATING, calcTime];
    // set state to new state
    super.setState(setState);
    
  }

  public produceWorker() {
    // call the factory for create worker 
    // not finish
    return FactoryCharacter.createCharacter(this.typeCharacter, super.getPlayerSheet(), TypeBuilding.BASE);
  }

  public getCreationType(): TypeCharacter {
    return this.typeCharacter;   
  }

}

export default Base;
