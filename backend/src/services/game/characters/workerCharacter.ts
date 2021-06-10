import Character from './../characters/Character';
import PlayerSheet from '../player/playerSheet';
import TypeBuilding from './../builds/TypeBuilding';

class Worker extends Character {
  private playerSheet: PlayerSheet;
  private typeBuildingToCreate: Array<TypeBuilding>;
  private energyExperience: number;
  private resourcesExperience: number;
  private buildingExperience: number;

  public constructor(playerSheet: PlayerSheet) {
    super();
  }

  public getBuildingExperience(): number {
    return this.buildingExperience;
  }

}

export default Worker;
