'use strict';

// Create an abstract Vehicle class
// it should have at least 3 fields


export abstract class Vehicle {
    protected _type: string;
    protected _color: string;
    protected _fuelCapacity: number;
    


	constructor(type: string, color: string, fuelCapacity: number) {
        this._type = type;
        this._color = color;
        this._fuelCapacity = fuelCapacity;
	}

}