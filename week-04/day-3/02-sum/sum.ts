'use strict'

// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list


export class Numbers{
    private _numbersList: number[];

    constructor(numbersList: number[]){
        this._numbersList = numbersList;
    }

    public sum(): number {
        return this._numbersList.reduce(function(num1, num2){
            return num1 + num2;
        }, 0)
    }
}