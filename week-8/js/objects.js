function attack(enemyDef) {
  const dmg = this.atk - enemyDef;
  if (dmg <= 0) {
    return 0;
  } else {
    return dmg;
  }
}

// Objects
const person = {
  // Properties (variables that belong to this object)
  name: "Ty the Cleric Guy",
  hp: 8,
  def: 0,
  atk: 2,
  spd: 3,

  // Methods (functions that belong to this object)
  attack: attack,

  takeDamage(damageAmount) {
    this.hp -= damageAmount;
  },
};

const enemy = {
  name: "Slime",
  hp: 4,
  def: 3,
  atk: 1,
  spd: 1,

  attack: attack,

  takeDamage(damageAmount) {
    this.hp -= damageAmount;
  },
};

// Ty attacks slime
const tyDmg = person.attack(enemy.def);
console.log(tyDmg);
console.log("Slime HP:", enemy.hp);

enemy.takeDamage(tyDmg);
console.log("Slime HP:", enemy.hp);

const characters = [
  { name: "Bob", hp: 2, atk: 1 },
  { name: "Henry", hp: 4, atk: 7 },
  { name: "Ty", hp: 1, atk: -1 },
  { name: "Susan", hp: 5, atk: 3 },
];

console.log("First character:", characters[0].name);
