'use strict';


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
garden.addTree(treeOrange);

garden.status();

garden.waterPlants(40);

garden.status();

garden.waterPlants(70);

garden.status();