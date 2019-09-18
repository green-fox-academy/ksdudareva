'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let rectColor:string [] = ['red', 'blue', 'green', 'yellow'];

for (let i:number = 0; i < 4; i++) {
    ctx.fillStyle = rectColor[i];
    ctx.fillRect(Math.floor((Math.random() * 100)), Math.floor((Math.random() * 100)), Math.floor((Math.random() * 100)), Math.floor((Math.random() * 100)));
}