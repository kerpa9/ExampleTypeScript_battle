import { log } from "console";
import { BattleServices } from "./battle.service";
import { Character } from "./character";
import { LoggerService } from "./logger.service";

const loggerService = new LoggerService();
const battle = new BattleServices(loggerService);

const hero = new Character(1, "Shinta", 100, 25);
const monster = new Character(2, "Golem", 160, 15);

const logger = new LoggerService();

console.log("Iniciando la batalla");
battle.battle(hero, monster);
console.log(" Batalla terminada");
