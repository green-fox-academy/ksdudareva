'use strict';

import { Vehicle } from "./vehicle";
import { Flyable } from './flyable';

// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface

export class Helicopter extends Vehicle implements Flyable{
    
    constructor(type: string, color: string, fuelCapacity: number) {
        super(type, color, fuelCapacity);
    }
    
    takeOff(): void {
        console.log("The " + this._color + " " + this._type + " has taken off.");
    }
    
    fly(): void {
        console.log("The " + this._color + " " + this._type + " burns " + this._fuelCapacity + " galons of fuel per hour.");
    }


    land(): void {
        console.log("The " + this._color + " " + this._type + " just landed.");
    }

    

    
}