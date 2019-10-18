'use strict';

import { Animal } from './animal';
import { Cat } from './cat';
import { Dog } from './dog';
import { Parrot } from './parrot';

export class Shelter {
    public _budget: number;
    public _animalList: Animal[];
    public _adopterList: string[];

    constructor(budget: number = 50) {
        this._budget = budget;
        this._adopterList = [];
        this._animalList = [];
    }

    // It must have a method named rescue. this method takes an Animal as parameter
    // and add the animal to the shelter's list and return the size of the list

    public rescue(animal: Animal): number {
        this._animalList.push(animal);
        return this._animalList.length;
    }

    // It must have a method named heal this method heals the first not healthy Animal
    // if it is possible by budget, returns the amount of healed animals(0 or 1)
    public heal(): number {
        let unhealthyAnimals: string[] = [];
        this._animalList.forEach(element => {
            if ((element.isHealthy == true) && (this._budget > element.healCost) && unhealthyAnimals.length == 0) {
                unhealthyAnimals.push(element.name);
            }
        })
        return unhealthyAnimals.length;
    }

    // It must have a method named addAdopter this method takes a name as a parameter
    // and saves it as a potential new owner
    public addAdopter(adoptername: string) {
        this._adopterList.push(adoptername);
    }

    // It must have a method named findNewOwner
    // this method pairs a random name with a random adoptable Animal if it is possible
    // and removes both of them from the lists
    public findNewOwner() {
        let adopterNumber = Math.floor(Math.random() * this._adopterList.length);
        let adopterName = this._adopterList[adopterNumber];
        let animalNumber = Math.floor(Math.random() * this._animalList.length);
        let animal = this._animalList[animalNumber];
        let animalName = animal.name;
        if (animal.isAdoptable()) {
            this._adopterList.splice(adopterNumber);
            this._animalList.splice(animalNumber);
        }

        console.log(adopterName, animalName);
    }

    // It must have a method named earnDonation this method takes an amount as parameter
    // and increases the shelter's budget by the parameter's value and returns the current budget
    public earnDonation(amount: number) {
        this._budget += amount;
        return this._budget;
    }

    // It must have a method named toString that represents the shelter
    // and print all the informations about the shelter and the animals in the following format:
    public toString(): void {
        console.log("Budget: " + this._budget + " €.\n"
        + "There are " + this._animalList.length + " animal(s) and " + this._adopterList + " potential adopter(s)\n"); 
        // QUESTION
        this._animalList.forEach(element => {
            if (element.isHealthy == true) {
                console.log(element.name + " is healthy and adoptable");
            } else {
                console.log(element.name + " is not healthy (healing would cost: " + element.healCost + " €) and not adoptable");
            }
        })
    }
}
