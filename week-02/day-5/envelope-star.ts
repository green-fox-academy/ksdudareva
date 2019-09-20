'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//do not touch the code above the line

function envelope(x, y, xx, yy) {
    ctx.beginPath();
    ctx.strokeStyle = "#34c6eb";
    ctx.moveTo(x, y);
    ctx.lineTo(xx, yy);
    ctx.stroke();
}

for (let a = 20; a < canvas.height / 2; a += 20) {
    ctx.strokeStyle = "blue"
    envelope(canvas.height / 2, canvas.height / 2 - a, a, canvas.height / 2);
}

for (let a = 0; a < canvas.height / 2; a += 20) {
    ctx.strokeStyle = "green"
    envelope(canvas.height / 2 + a, canvas.height / 2, canvas.height / 2, a);
}

for (let a = 20; a < canvas.height / 2; a += 20) {
    ctx.strokeStyle = "black"
    envelope(canvas.height / 2, canvas.height / 2 + a, a, canvas.height / 2);
}

for (let a = 20; a <= canvas.height / 2; a += 20) {
    ctx.strokeStyle = "red"
    envelope(canvas.height / 2, canvas.height / 2 + a, canvas.height - a, canvas.height/2)
}




