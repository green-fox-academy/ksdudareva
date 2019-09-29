export {};

'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


function sum(numb) {
    let sum: number = 0;
    for (let i = 0; i < numb; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sum(10));