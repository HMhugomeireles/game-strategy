import { Gamei18n } from './../i18n_Game';
import { BuildingPropertyKey } from './../sheets/buildingPropertyKey';
import { FactoryCharacter } from './../factory/characterFactory';
import BuildingAbstract from './building';
import TypeCharacter from '../characters/typeCharacter';
import TypeBuilding from './TypeBuilding';
import PlayerSheet from '../sheets/playerSheet/playerSheet';
import TypesBuildingState from './typeBuildingState';
import MathFormulas from './../mathematics/mathFormulas';

class Base extends BuildingAbstract {
  private typeCharacter: TypeCharacter = TypeCharacter.WORKER;
  private workersCreated: Array<Worker> = [];

  public constructor(
    _id: string,
    cityPosition: [number, number], 
    position: [number, number], 
    level: number, 
    resistance: [number, number ], 
    nWorkerSlots: number,
    playerSheet: PlayerSheet,
    ) {
    super(_id,cityPosition,position,level,resistance,nWorkerSlots,playerSheet);
  }

  /**
   * Make the levelup of the building
   * if have workers in the building and
   * the building is on state standby mode.
   * 
   * Use the playerSheet save and
   * use the gameSheet.
   * 
   * @returns {boolean}
   * Return the message 
   */
  public updatingBuilding(): boolean {

    if(super.getStateType() !== TypesBuildingState.STANDBY) {
      return false;
    }
    // Not possible put working without worker
    if(super.getWorkerListOnBuilding().length === 0) {
      return false;
    }

    // calc the time to upgrade
    let setState: [TypesBuildingState, number];
    let calcTime: number = 0;

    let baseTime = super.getBaseTimeOfBuildingTypeFromGameSheet(TypeBuilding.BASE, BuildingPropertyKey.TIME_BUILD);
    let buildingLevel = super.getLevel();
    let nWorkersOnBuilding = super.getWorkerListOnBuilding().length;
    let playerWorksExperienceOnBuilding = super.getPlayerWorksExperienceOnBuildingFromPlayerSheet();

    // Make the calculation 
    calcTime = MathFormulas.calcTimeToUpgradeBuilding(baseTime, buildingLevel, nWorkersOnBuilding, playerWorksExperienceOnBuilding);

    setState = [TypesBuildingState.UPDATING, calcTime];
    // set state to new state
    super.setState(setState);
    return true;
  }

  /**
   * Make the production of Worker Character and 
   * setState the building to Production and
   * time need to end
   * 
   * Use the playerSheet save and
   * use the gameSheet.
   * 
   * @param {nToCreate: number}
   * 
   * @returns {boolean}
   */
  public produceWorker(nToCreate: number): boolean {

    if(super.getStateType() !== TypesBuildingState.STANDBY) {
      return false;
    }

    let baseTime = 0;
    let nWorkersOnBuilding = super.getWorkerListOnBuilding().length;
    let playerWorkersLevel = this.getPlayerWorkersLevel();

    let timeToEndCreation = MathFormulas.calcTimeToCreateWorker(baseTime, nWorkersOnBuilding, playerWorkersLevel);
    let setState: [TypesBuildingState, number];


    for(let start = 0; start < nToCreate; start++) {
      this.workersCreated.push(
        //cast to Worker 
       <Worker>FactoryCharacter.createCharacter(this.typeCharacter, super.getPlayerSheet(), TypeBuilding.BASE)
      )
    }

    setState = [TypesBuildingState.PRODUCTION, timeToEndCreation];
    super.setState(setState);

    return true; 
  }

  private getPlayerWorkersLevel(): number {
    let playerSheet = super.getPlayerSheet();

    let workerLevel = playerSheet["Character"]["Worker"]["level"];

    return workerLevel;
  }


}

export default Base;
