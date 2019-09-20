'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//do not touch the code above the line

function linesPlay(x, y, xx, yy, c) {
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.moveTo(x, y);
    ctx.lineTo(xx, yy);
    ctx.stroke();
}

for (let a = 0; a < canvas.height; a += 30) {
    linesPlay(0 + a, canvas.height, 0, a, "green")
}

for (let b = 0; b < canvas.height; b += 30) {
    linesPlay(b, 0, canvas.height, b, "purple")
}