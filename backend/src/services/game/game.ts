import Worker from './characters/workerCharacter';
import Base from './builds/base';

class Game {
  private characters: [Array<Worker>];
  private buildings: [Base]
  
  public constructor() {

  }
  
  public load(player) {

  }


  public build() {
    const defaultConstructionTime = baseBuildingSheetDB.constructionTime;
    const calculation = (defaultConstructionTime * super.getLevel()) - worker.getBuildingExperience()
    const finalConstructionTime = 0

    setTimeout(() => {
      
    }, timeout);
  }
  

}
