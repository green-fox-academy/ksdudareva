export {};

'use strict';

let example: string = 'In a dishwasher far far away';
let wrong: string = 'dishwasher';
let right: string = 'galaxy'

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

console.log(example.replace(wrong, right));



