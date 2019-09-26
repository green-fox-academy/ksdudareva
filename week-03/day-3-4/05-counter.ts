'use strict'

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    private _integer: number;

    constructor(_integer = 0) {
        this._integer = _integer;
    }

    public add(number = 1) {
        this._integer += number;
    }

    public get integer(): number{
        return this._integer;
    }

    public reset(){
        return this._integer = 0;
    }
    
}

let counter1 = new Counter(43);

counter1.add();

console.log(counter1.integer);

counter1.add(15);

console.log(counter1.integer);

counter1.reset();

console.log(counter1.integer);