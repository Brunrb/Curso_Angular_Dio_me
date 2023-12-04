"use strict";
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    atack() {
        console.log(`Atack with ${this.stregth} points`);
    }
}
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Bruno", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.atack();
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["bruno", "zoro", "asta"]);
numArray.push("lucios");
console.log(numArray);
console.log(stgArray);
