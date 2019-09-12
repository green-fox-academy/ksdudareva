export {};

'use strict';

let width: number = 2.334;
let length: number = 2.334;
let height: number = 2.334;

let volume: number = width*length*height;
let area: number = 2*(width*length+width*height+length*width);

console.log("Volume: " + volume);
console.log("Area :" + area);
