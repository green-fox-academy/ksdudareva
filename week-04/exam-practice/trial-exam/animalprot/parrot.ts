'use strict';

import { Animal } from './animal';

export class Parrot extends Animal {
    constructor(name: string, ownerName: string, isHealthy: boolean, healCost: number = Math.floor(Math.random() * 10) + 4) {
        super(name, ownerName, isHealthy, healCost);
    }

}