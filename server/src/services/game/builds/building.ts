import { BuildingPropertyKey } from './../sheets/buildingPropertyKey';
import { SheetFunc } from './../gameUtil/sheetFunc';
import Worker from '../characters/workerCharacter';
import PlayerSheet from './../sheets/playerSheet/playerSheet';
import TypesBuildingState from './typeBuildingState';
import TypeBuilding from './TypeBuilding';

abstract class BuildingAbstract {
  private _id: string;
  private buildingState: [TypesBuildingState, number];
  private cityPosition: [number, number]; 
  private position: [number, number];
  private level: number;
  private resistance: [number, number];
  private nWorkerSlots: number;
  private workerSlots: Array<Worker>;
  private inWreckage: boolean;
  private playerSheet: PlayerSheet;

  public constructor(
    _id: string,
    cityPosition: [number, number], 
    position: [number, number], 
    level: number, 
    resistance: [number, number], 
    nWorkerSlots: number,
    playerSheet: PlayerSheet
    ){
    this._id = _id;
    this.position = cityPosition;
    this.position = position;
    this.level = level;
    this.resistance = resistance;
    this.nWorkerSlots = nWorkerSlots;
    this.inWreckage = false;
    this.playerSheet = playerSheet;
  }

  /**
   * Put the worker in the building to upgrade the building
   * 
   * @param worker 
   * @returns {boolean}
   */
  public addWorkerToBuilding(worker: Worker): boolean {
    let maxWorkersInBuilding = (this.getNWorkerSlots() - 1);
    let nWorkerInBuilding = this.getWorkerListOnBuilding().length;

    if (maxWorkersInBuilding < nWorkerInBuilding) {
      this.addWorkerToBuilding(worker);
      return true;
    }
    return false;
  }

  /**
   * Receive damage and update the resistance of building
   * 
   * @param damage {number}
   * @returns {void}
   */
  public updateDamage(damage: number): void {
    const valueResistance = 0
    const valueDamage = 1;
    let resistance = this.resistance[valueResistance];
    let totalDamage = this.resistance[valueDamage];
    const isDestroy = (totalDamage + damage) >= resistance;
    if (isDestroy) {
      this.resistance[valueResistance] = 0;
      this.inWreckage = true;
    } else {
      this.resistance[valueDamage] = totalDamage + damage;
    }
  }

  /**
   * Remove the Worker from the building and 
   * return the Worker if the slots have workers
   * otherwise return false 
   * 
   * @returns {Worker}
   * or
   * @returns {false}
   * 
   */
  public removeWorkerFromBuilding(): any {
    if (this.workerSlots.length === 0) {
      return false
    }
    return this.workerSlots.pop();
  }
  
  /**
   * 
   * 
   * @param {typeBuilding}
   * 
   * @returns {BaseSheet}
   */
  public getBaseTimeOfBuildingTypeFromGameSheet(typeBuilding: TypeBuilding, buildingPropertyKey: BuildingPropertyKey): number {
    return SheetFunc.getValueFromGameSheetByTypeBuilding(typeBuilding, buildingPropertyKey);
  }


  public getPlayerWorksExperienceOnBuildingFromPlayerSheet(): number {

    return;
  }

  /**
   * Change the state of the building
   * 
   * @param state {[TypesBuildingState, timeToFinish]}
   * @returns {void}
   */
  public setState(state: [TypesBuildingState, number]): void {
    this.buildingState = state;
  }

  public getStateType(): TypesBuildingState {
    let typeState = 0
    return this.buildingState[typeState];
  }

  public getStateTime(): number {
    let stateTime = 1;
    return this.buildingState[stateTime];
  }

  public updateLevel(level: number): void {
    this.level = level;
  }

  public updateMaxResistance(maxResistance: number): void {
    this.resistance[0] = maxResistance;
  }
  public isInWreckage(): boolean {
    return this.inWreckage;
  }

  public getPlayerSheet(): PlayerSheet {
    return this.playerSheet;
  }
  public getId(): string {
    return this._id;
  }

  public getPosition(): [number, number] {
    return this.position;
  }

  public getCityPosition(): [number, number] {
    return this.cityPosition;
  }

  public getLevel(): number {
    return this.level;
  }

  public getResistance(): [number, number] {
    return this.resistance;
  }

  public getNWorkerSlots(): number {
    return this.nWorkerSlots;
  }

  public getWorkerListOnBuilding(): Array<Worker> {
    return this.workerSlots;
  }



}

export default BuildingAbstract;