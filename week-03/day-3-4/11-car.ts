
'use strict';

import { Station } from './11-station';

// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Car {
    private _gasAmount: number;
    private _capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this._gasAmount = gasAmount;
        this._capacity = capacity;
    }

    public get capacity(): number {
        return this._capacity;
    }

    public set gasAmount(gasAmount: number) {
        this._gasAmount = gasAmount;
    }

    public get gasAmount(): number {
        return this._gasAmount;
    }

}

export { Car };
 