'use strict';

import { Car } from './11-car';

// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount

class Station {
    private _gasAmount: number;

    constructor(gasAmount: number) {
        this._gasAmount = gasAmount;
    }

    refill(car: Car): void {
        car.gasAmount += car.capacity;
        this._gasAmount -= car.capacity;
    }

    public get gasAmount(): number {
        return this._gasAmount;
    }
}

export { Station };