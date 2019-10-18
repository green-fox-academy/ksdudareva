import { Animal } from './animal';
import { Cat } from './cat';
import { Dog } from './dog';
import { Parrot } from './parrot';
import { Shelter } from './shelter';

let animal = new Cat ("Malna", "Ksenia", false);
let animal1 = new Dog("malna", "ksenia", true);
let parrot1 = new Parrot("gg", "tibor", false);

let shelter = new Shelter();


console.log(shelter.rescue(parrot1), shelter.rescue(animal), shelter.rescue(animal1));
console.log(shelter.heal());


shelter.addAdopter("Ksenia");
shelter.addAdopter("Maria");

console.log(shelter._adopterList);

shelter.findNewOwner();

shelter.toString();