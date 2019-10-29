'use strict';

    //   Add an item that says 'The Green Fox' to the asteroid list.

    let asteroidList = document.getElementsByTagName('ul')[0];
    let grFox = "The Green Fox";
    let newLi = document.createElement('li');
    newLi.innerText = grFox;
    asteroidList.appendChild(newLi);

    //   Add an item that says 'The Lamplighter' to the asteroid list.

    let lamplighter = 'The Lamplighter';
    let newLi2 = document.createElement('li');
    newLi2.innerText = lamplighter;
    asteroidList.appendChild(newLi2);

    //   Add a heading saying 'I can add elements to the DOM!' to the .container.

    let phrase = 'I can add elements to the DOM!';
    let container = document.getElementsByClassName('container')[0];
    let newH2 = document.createElement('h2');
    newH2.innerText = phrase;

    container.appendChild(newH2);

    //   Add an image, any image, to the container.

    let imageUrl = 'https://static.wixstatic.com/media/f4461b_83457ca5dd844c71a760d36e6583d0ff.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/f4461b_83457ca5dd844c71a760d36e6583d0ff.png';
    let newImage = document.createElement('img');
    newImage.setAttribute('src', imageUrl);
    container.appendChild(newImage);