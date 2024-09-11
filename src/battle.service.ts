import { Character } from "./character";
import { LoggerService } from "./logger.service";

export class BattleServices {
  constructor(private logger: LoggerService) {}

  battle(attacker: Character, defender: Character) {
    while (attacker.isAlive() && defender.isAlive()) {
      this.logger.log(`${attacker.name} ataca ${defender.name}`);
      attacker.attack(defender);

      if (!defender.isAlive()) {
        this.logger.log(`${defender.name} ha muerto`);
        break;
      } else {
        this.logger.log(
          `${defender.name} ha ${defender.health} puntos de vida`
        );
      }

      [attacker, defender] = [defender, attacker];
    }
  }
}
