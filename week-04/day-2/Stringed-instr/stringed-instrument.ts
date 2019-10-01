'use strict';

import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
    protected _numberOfStrings: number;

    constructor(name: string, numberOfStrings: number){
        super(name);
        this._numberOfStrings = numberOfStrings;
    }

    public abstract sound(): string;

    public play(): void{
        console.log(this._name +", a " + this._numberOfStrings+ "-stringed instrument that goes " + this.sound());
    }
}