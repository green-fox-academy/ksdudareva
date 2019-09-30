'use strict';

export class Plant{
    private _color: string;
    private _absorbtion: number;
    private _waterNeeded: number;
    private _waterAmmount: number;

	constructor(color: string, absorbtion: number, waterNeeded: number) {
		this._color = color;
		this._absorbtion = absorbtion;
        this._waterNeeded = waterNeeded;
        this._waterAmmount = 0;
	}

    water(waterAmount: number): void {
        this._waterAmmount += waterAmount * this._absorbtion;
    }
    
    needsWater(): boolean {
        return this._waterNeeded >= this._waterAmmount;
    }
    
}


