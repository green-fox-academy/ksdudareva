'use strict';

import { Plant } from './plant';
import { Tree } from './tree';
import { Flower } from './flower';
import { Garden } from './garden';

let flowerBlue = new Flower("blue");
let flowerYellow = new Flower("yellow");
let treePurple = new Tree("purple");
let treeOrange = new Tree("orange");

let garden = new Garden();

garden.addFlower(flowerBlue);
garden.addFlower(flowerYellow);
garden.addTree(treePurple);
// garden.addTree(treeOrange);

garden.waterPlants(40);

garden.waterPlants(70);
console.log(garden.getPlantList().length);