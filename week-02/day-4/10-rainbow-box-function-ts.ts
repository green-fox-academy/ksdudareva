'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function rainbowBox(x: number, y: string) {
    ctx.fillStyle = y;
    ctx.fillRect((canvas.width - x) / 2, (canvas.height - x) / 2, x, x);
    console.log(x,y);
}

let colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink'];
let e: number = 400;

for (let i: number = 0; i < 8; i++) {
    rainbowBox(e, colors[i]);
    e -= 50;
}