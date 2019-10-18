'use strict';

import { Animal } from './animal';

export class Cat extends Animal {
    constructor(name: string, ownerName: string, isHealthy: boolean, healCost: number = Math.floor(Math.random() * 6)) {
        super(name, ownerName, isHealthy, healCost);
    }

}

