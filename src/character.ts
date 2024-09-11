export class Character {
  constructor(
    public id: number,
    public name: string,
    public health: number,
    public attackPower: number
  ) {}

  attack(target: Character) {
    const damage: number = Math.floor(Math.random() * this.attackPower + 1);
    target.health -= damage;
    console.log(
      `${this.name} ataca ${target.name} y da ${damage} puntos de daño`
    );
  }

  isAlive() {
    return this.health > 0;
  }
}

// const character = new Character("jobs");
