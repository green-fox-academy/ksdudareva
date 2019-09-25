// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

'use strict'

class Animal {
    _hunger: number;
    _thirst: number;

    constructor() {
        this._hunger = 50;
        this._thirst = 50;
    }

    public eat() {
        this._hunger -= 1;
    }

    public drink() {
        this._thirst -= 1;
    }

    public play() {
        this._hunger += 1;
        this._thirst += 1;
    }
}

let Malna = new Animal();

Malna.drink();
Malna.eat();


console.log(Malna._thirst);
console.log(Malna._hunger);

Malna.play();

console.log(Malna._thirst);
console.log(Malna._hunger);