import WorkerCharacter from '../characters/workerCharacter';
import TypeCreation from '../typesCreation';

abstract class BuildingAbstract {
  private _id: string;
  private cityPosition: [number, number]; 
  private position: [number, number];
  private level: number;
  private resistance: [number, number];
  private nWorkerSlots: number;
  private workerSlots: Array<WorkerCharacter>;
  private typeCreation: TypeCreation;
  private inWreckage: boolean;

  public constructor(
    _id: string,
    cityPosition: [number, number], 
    position: [number, number], 
    level: number, 
    resistance: [number, number], 
    nWorkerSlots: number,
    typeCreation: TypeCreation
    ){
    this._id = _id;
    this.position = cityPosition;
    this.position = position;
    this.level = level;
    this.resistance = resistance;
    this.nWorkerSlots = nWorkerSlots;
    this.typeCreation = typeCreation;
    this.inWreckage = false;
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
  
  public addWorker(worker: WorkerCharacter): boolean {
    let isSlotsFull = this.workerSlots.length === (this.nWorkerSlots - 1);
    if(isSlotsFull){
      return false;
    } else {
      this.workerSlots.push(worker);
      return true;
    }
  }

  public getTypeCreation(): TypeCreation {
    return this.typeCreation;
  }
  
  public updateLevel(level: number) {
    this.level = level;
  }

  public updateMaxResistance(maxResistance: number) {
    this.resistance[0] = maxResistance;
  }

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

  public isInWreckage(): boolean {
    return this.inWreckage;
  }


}

export default BuildingAbstract;