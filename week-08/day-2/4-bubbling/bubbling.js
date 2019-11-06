'use strict';
    //   Here is an image inspector, but the buttons are not implemented yet, that will
    //   be your task!
    //    - the nav buttons (up, down, left, right) move the background by 10px
    //    - the zoom buttons increase/decrease the image by 20%
    //    - attach only two event listeners to the nav element
    //      - one for navigation
    //      - one for zooming


let posX = 0;
let posY = 0;
let imgSize = 100;
let nav = document.querySelector('nav');
let img = document.querySelector('.img-inspector');

function changeDir(event) {
  let direction = event.path[0].textContent;
  if (direction == 'Up') {
    posY -= 10;
  } else if (direction == 'Down') {
    posY += 10;
  } else if (direction == 'Left') {
    posX -= 10;
  } else if (direction == 'Right') {
    posX += 10;
  } else if (direction == 'Zoom in'){
    imgSize += 20;
  } else if (direction == 'Zoom out'){
    imgSize -= 20;
  }
  img.setAttribute('style', `background-position-y:${posY}px; background-position-x:${posX}px; background-size: ${imgSize}%`);
};

nav.addEventListener('click', changeDir);