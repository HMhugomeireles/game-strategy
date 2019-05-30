import Character from './../characters/Character';

class Worker extends Character {
  private energyExperience: number;
  private resourcesExperience: number;
  private buildingExperience: number;

  public constructor() {
    super();
  }

  public getBuildingExperience(): number {
    return this.buildingExperience;
  }

}

export default Worker;
