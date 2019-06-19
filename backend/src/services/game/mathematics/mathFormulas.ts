

class MathFormulas {

  public static calcTimeToUpgradeBuilding(baseTime: number, level: number, numberWorks: number, searchOnBuilding: number): number {
    let timeForLevel = (baseTime * level);
    let allExperienceValue = numberWorks * searchOnBuilding;  
    let timeToRemove = (timeForLevel * allExperienceValue) / 100;
    let timeToUpgrade = timeForLevel - timeToRemove
    return timeToUpgrade;
  }

  public static calcTimeToCreateWorker(baseTime: number, nWorkersOnBuilding: number, playerWorkersLevel: number): number {
    throw new Error("Not implemented.");
  }

}

export default MathFormulas;
