console.log('Задача 1');

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;      
  };

takeDamage(damage) {    
  this.durability -= damage; 
  if (this.durability <= 0) {
    this.durability = 0;
  };
  return this.durability;
  };  

// getDamage() {
//   if (this.durability >= //как получить "изначальное?")
//   * 0.3) {
//     return this.attack;
//   } else if (this.durability = 0) {
//     return 0;
//   } else {
//     return this.attack / 2;
//   };  
// };



isBroken() {
  if (this.durability > 0) {
  return false;
  };
  return true;
  };
}; 
 
const sword = new Weapon('Старый меч', 25, 500, 1);
const arm = new Weapon('Рука', 1, Infinity, 1 );
const bow = new Weapon('Лук', 10, 200, 3);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

sword.takeDamage(5);
console.log(sword.durability);
arm.takeDamage(50);
console.log(arm.durability);
bow.takeDamage(300);
console.log(bow.durability);
console.log(bow.isBroken());
console.log(sword.isBroken());




console.log('Задача 2');

class Bow extends Weapon {  
  constructor(takeDamage, isBroken) {
    super(takeDamage, isBroken),
    this.name = 'Лук',
    this.attack = 10, 
    this.durability = 200, 
    this.range = 3
  };
};

class LongBow extends Bow {
  constructor(durability) {
    super(durability);
    this.name = 'Длинный Лук',
    this.attack = 15;
    this.range = 4;
  };
};

const bow1 = new Bow;
console.log(bow1.durability);
const bow2 = new LongBow;
console.log(bow2.durability);
console.log(bow2.name);
bow1.takeDamage(5);
console.log(bow1.durability);
bow2.takeDamage(210);
console.log(bow2.durability);
console.log(bow2.isBroken());
console.log(bow2.attack);

class Arm extends Weapon {
  constructor(takeDamage, isBroken) {
    super(takeDamage, isBroken),
    this.name = 'Рука',
    this.attack = 1,
    this.durability = Infinity,
    this.range = 1
  };
};

class Sword extends Weapon {
  constructor(takeDamage, isBroken) {
    super(takeDamage, isBroken),
    this.name = 'Меч',
    this.attack = 25,
    this.durability = 500,
    this.range = 1
  };
};

class Knife extends Weapon {
  constructor(takeDamage, isBroken) {
    super(takeDamage, isBroken),
    this.name = 'Нож',
    this.attack = 5,
    this.durability = 300,
    this.range = 1
  };
};

class Staff extends Weapon {
  constructor(takeDamage, isBroken) {
    super(takeDamage, isBroken),
    this.name = 'Посох',
    this.attack = 8,
    this.durability = 300,
    this.range = 2
};
};

class Axe extends Sword {
  constructor(range) {
    super(range),
    this.name = 'Секира',
    this.attack = 27,
    this.durability = 800
  };
};

class StormStaff extends Staff {
  constructor(durability) {
    super(durability),
    this.name = 'Посох Бури',
    this.attack = 10,
    this.range = 3
  };
};

