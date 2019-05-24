import Character from './character.interface';
import Building from '../building/building.interface';

interface WorkerInterface extends Character {
  /**
   * 
   */
  energyExperience: Number;
  resourcesExperience: Number;
  buildingExperience: Number;

  

  builds(building: Building): string;
}