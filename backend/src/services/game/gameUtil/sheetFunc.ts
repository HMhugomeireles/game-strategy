import TypesBuildingState from "../builds/typeBuildingState";
import TypeBuilding from "../builds/TypeBuilding";
import { GameSheet } from './../sheets/gamesheet/gameSheet'
import { BuildingPropertyKey } from './../sheets/buildingPropertyKey';
import TypeCharacter from "../characters/typeCharacter";

export class SheetFunc {

  /**
   * Find the value in GameSheet of the Building pass
   * and property needed
   * 
   * @param {TypeBuilding}
   * @param {BuildingPropertyKey}
   * 
   * @returns {number}
   * The value define 
   */
  public static getValueFromGameSheetByTypeBuilding(typeBuilding: TypeBuilding, propertyKey: BuildingPropertyKey): number {
    let value = <number>GameSheet["Buildings"][typeBuilding][propertyKey];
    return value;
  }

  /**
   * Find the value in GameSheet of the Character pass
   * and property needed
   * 
   * @param {TypeCharacter}
   * @param {CharacterPropertyKey}
   * 
   * @returns {number}
   * The value define 
   */
  public static getValueFromGameSheetByTypeCharacter(typeCharacter: TypeCharacter, characterPropertyKey: CharacterPropertyKey): number {
    let value = <number>GameSheet["Character"][typeCharacter][characterPropertyKey];
    return value;
  }


}
