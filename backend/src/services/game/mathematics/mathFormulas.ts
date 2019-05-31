

class MathFormulas {

  public static calcTimeToUpgradeBuilding(baseTime: number, level: number, numberWorks: number, searchOnBuilding: number): number {
    let timeForLevel = (baseTime * level);
    let allExperienceValue = numberWorks * searchOnBuilding;  
    let timeToRemove = (timeForLevel * allExperienceValue) / 100;
    let timeToUpgrade = timeForLevel - timeToRemove
    return timeToUpgrade;
  }

}

export default MathFormulas;
