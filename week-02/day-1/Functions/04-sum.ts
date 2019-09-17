export {};

'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


function sum (num: number) {
    let sum:number = 0;
    for(let r:number = 0; r < num; r++) {
        sum += r;
    }
    return sum;
}
console.log(sum(10));
