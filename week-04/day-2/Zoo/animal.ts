'use strict';

export abstract class Animal {
    protected _name: string;
    protected _age: number;


	constructor(name: string, age?: number) {
        this._name = name;
        this._age = age;
    }
    
    public getName(): string {
        return this._name;
    }

    public abstract breed(): string;

}