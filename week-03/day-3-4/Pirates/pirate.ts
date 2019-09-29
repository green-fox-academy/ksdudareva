'use strict';

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

// And... if you get that far...

// Add a parrot.

class Pirate {
    private _numOfDrinks: number;
    private _isAlive: boolean = true;

    constructor (numOfDrinks: number = 0) {
        this._numOfDrinks = numOfDrinks;
    }

    die(): void {
        this._isAlive = false;
    }

    howsItGoingMate(): void {
        console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
    }

    drinksomeRum(): void {
        if (!this._isAlive) {
            console.log("Pirate is dead");
        } else if (this._numOfDrinks <= 4) {
            console.log("Poor me anudder");
            this._numOfDrinks++;
        } else if (this._numOfDrinks == 5) {
            this.howsItGoingMate();
            this._numOfDrinks++;
        } else if (this._numOfDrinks == 6) {
            this.die();
            console.log("Pirate is dead");
        }
    }


}

let pirate = new Pirate;

pirate.drinksomeRum();
pirate.drinksomeRum();
pirate.drinksomeRum();
pirate.drinksomeRum();
pirate.drinksomeRum();
pirate.drinksomeRum();
pirate.drinksomeRum();