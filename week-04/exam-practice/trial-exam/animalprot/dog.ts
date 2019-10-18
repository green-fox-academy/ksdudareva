'use strict';

import { Animal } from './animal';

export class Dog extends Animal {
    constructor(name: string, ownerName: string, isHealthy: boolean) {
        let healCost = isHealthy == true ? 0 : Math.floor(Math.random() * 8) + 1;
        super(name, ownerName, isHealthy, healCost);
    }

}