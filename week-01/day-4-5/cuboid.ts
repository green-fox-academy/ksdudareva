export {};

'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let width: number = 5.87;
let height: number = 4.53;
let length: number = 3.566;

let volume = width*height*length;
let surfArea = 2*length*width + 2*length*height + 2*height*width;

console.log("Surface Area: " + surfArea);
console.log("Volume: " + volume);