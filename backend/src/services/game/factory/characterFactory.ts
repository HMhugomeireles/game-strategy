import Character from './../characters/Character';
import TypeCharacter from './../characters/typeCharacter';
import PlayerSheet from './../player/playerSheet';

import Worker from './../characters/workerCharacter';

class CharacterFactory {

  public static createCharacter(typeCharacter: TypeCharacter, playerSheet: PlayerSheet): Character {
    let newCharacter: Character;

    switch(typeCharacter) {
      case TypeCharacter.WORKER:
        newCharacter = new Worker(playerSheet);
        break;
      case TypeCharacter.INFANTRY:
        newCharacter = new Infantry(playerSheet);
        break;
      case TypeCharacter.ARMY_I:
        newCharacter = new ArmyI(playerSheet);
        break;
      case TypeCharacter.ARMY_II:
        newCharacter = new ArmyII(playerSheet);
        break;
      case TypeCharacter.ARMY_III:
        newCharacter = new ArmyIII(playerSheet);
        break;
      case TypeCharacter.SPECIAL_FORCE:
        newCharacter = new SpecialForce(playerSheet);
        break;
      case TypeCharacter.SEAL:
        newCharacter = new Seal(playerSheet);
        break;
    }

    return newCharacter;
  }

}