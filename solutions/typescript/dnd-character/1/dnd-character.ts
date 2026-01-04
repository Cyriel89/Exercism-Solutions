export class DnDCharacter {
  public strength = DnDCharacter.generateAbilityScore();
  public dexterity = DnDCharacter.generateAbilityScore();
  public constitution = DnDCharacter.generateAbilityScore();
  public intelligence = DnDCharacter.generateAbilityScore();
  public wisdom = DnDCharacter.generateAbilityScore();
  public charisma = DnDCharacter.generateAbilityScore();
  public hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  
  public static generateAbilityScore() {
    var throws: number[] = [];
    for (let i = 0; i < 4; i++) {
      throws.push(Math.floor(Math.random() * (6 - 1) + 1)); 
    }
    return throws.sort().slice(-3).reduce((sum, t) => sum + t);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
