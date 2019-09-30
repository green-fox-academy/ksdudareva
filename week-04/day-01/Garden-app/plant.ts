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

    public water(waterAmount: number): void {
        this._waterAmmount += waterAmount * this._absorbtion;
    }
    
    public needsWater(): boolean {
        return this._waterNeeded >= this._waterAmmount;
    }

    public type(): string {
        return " ";
    }

    public waterCheck(): void {
        if (this.needsWater) {
            console.log("The " + this._color + " " + this.type() + " needs water");
        } else {
            console.log("The " + this._color + " " + this.type() + " doesnt need water.");
        }

    }
    
}


