'use strict';

import { Instrument } from "./instrument";
import { StringedInstrument } from "./stringed-instrument";

export class ElectricGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 6){
        super("Electric Guitar", numberOfStrings);
    }

    public sound(): string {
        return "Twang";
    }
}

export class BassGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 4){
        super("Bass Guitar", numberOfStrings);
    }

    public sound(): string {
        return "Duum-duum-duum";
    }
}

export class Violin extends StringedInstrument{
    constructor(numberOfStrings: number = 4){
        super("Violin", numberOfStrings);
    }

    public sound(): string {
        return "Screech";
    }
}