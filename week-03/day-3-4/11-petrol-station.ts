'use strict';

import { Car } from './11-car';
import { Station } from './11-station';

let audi = new Car();
let petrolStation = new Station(500);

console.log("amount of gas before refill is " + audi.gasAmount);
console.log("amount of gas at the station before car refill is " + petrolStation.gasAmount);

petrolStation.refill(audi);

console.log("amount of gas in the car is " + audi.gasAmount);
console.log("amount of gas left on the station is " + petrolStation.gasAmount);


