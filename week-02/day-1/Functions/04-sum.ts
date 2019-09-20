export {};

'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


function sum (num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum(5));