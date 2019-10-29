'use strict';

//   Remove the king from the list.

let parent = document.getElementsByTagName('ul')[0];
let king = parent.getElementsByTagName('li')[0];

let removed = parent.removeChild(king);

//   Fill the list based on the following list of objects.
//   Only add the asteroids to the list.
//   Each list item should have its category as a class and its content as text content. 

let asteroids = document.querySelector('.asteroids');

  const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ];


let asteroidObj = [];

planetData.forEach(element => {
	element.asteroid == true ? asteroidObj.push(element) : undefined
});
