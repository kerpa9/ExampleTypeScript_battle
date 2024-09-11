import { log } from "console";
import { BattleServices } from "./battle.service";
import { Character } from "./character";
import { LoggerService } from "./logger.service";

const character = new Character(1, "jobs", 23, 2);

const logger = new LoggerService();

const battle = new BattleServices(logger);

console.log(character);
console.log(battle);
