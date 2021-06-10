import Worker from './characters/workerCharacter';
import Base from './builds/base';
import TypeCharacter from './characters/typeCharacter';
import PlayerSheet from './player/playerSheet';

class Game {
  private characters: [Array<Worker>];
  private buildings: [Base]
  
  public constructor() {

    let a = new PlayerSheet();

    let b = new Base(1,[1,1],[1,1],1,1000,5,TypeCharacter.WORKER,a);

    
  }
  
  public load(player) {

  }


  public build() {
    /*
    const defaultConstructionTime = baseBuildingSheetDB.constructionTime;
    const calculation = (defaultConstructionTime * super.getLevel()) - worker.getBuildingExperience()
    const finalConstructionTime = 0

    setTimeout(() => {
      
    }, timeout);
  */
  }
  

}
