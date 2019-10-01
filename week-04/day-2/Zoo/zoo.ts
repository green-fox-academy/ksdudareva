'use strict';

import { Animal } from "./animal";

export class Reptile extends Animal{
    constructor(name: string){
        super(name);
    }

    public breed(): string {
        return "laying eggs.";
    }
}

export class Mammal extends Animal{
    constructor(name: string){
        super(name);
    }
    public breed(): string {
        return "pushing miniature versions out.";
    }
}

export class Bird extends Animal{
    constructor(name: string){
        super(name);
    }
    public breed(): string {
        return "laying eggs.";
    }

}