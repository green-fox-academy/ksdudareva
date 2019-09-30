'use strict';

import { Plant } from "./plant";

export class Flower extends Plant {
    
    constructor(color: string, absorbtion: number, waterNeeded: number){
        super(color, absorbtion, waterNeeded); 
    }
}