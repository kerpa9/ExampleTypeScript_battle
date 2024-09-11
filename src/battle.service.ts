import { Character } from "./character";
import { LoggerService } from "./logger.service";

export class BattleServices {
  constructor(private logger: LoggerService) {}

  battle(attacker: Character, defender: Character) {}
}
