'use strict';

export abstract class Animal {
    protected _name: string;
    protected _ownername: string;
    protected _isHealthy: boolean;
    protected _healCost: number;


    constructor(name: string, ownername: string, isHealthy: boolean, healCost: number) {
        this._name = name;
        this._ownername = ownername;
        this._isHealthy = isHealthy;
        this._healCost = healCost;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get isHealthy(): boolean {
        return this._isHealthy;
    }

    public set isHealthy(value: boolean) {
        this._isHealthy = value;
    }

    public get healCost(): number {
        return this._healCost;
    }

    public set healCost(value: number) {
        this._healCost = value;
    }

    public isAdoptable(): boolean {
        if (this._isHealthy == true) {
            return true
        } else {
            return false;
        }
    }

    public toString(): string {
        if (this._isHealthy == true) {
            return this._name + " is healthy and adoptable.";
        } else {
            return this._name + " is not healthy " + "(" + this._healCost + ")" + ", and not adoptable";
        }
    }

    

}