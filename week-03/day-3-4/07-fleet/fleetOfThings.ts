import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class 
// -  Download those, use those
// -  create a fleet
// -  Achieve this output:
//  Create a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 

let task1 = new Thing ('Get milk');
let task2 = new Thing ('Remove the obstacles');
let task3 = new Thing ('Stand up');
let task4 = new Thing ('Eat lunch');

task4.complete();
task3.complete();

let myFleet = new Fleet();

myFleet.add(task1);
myFleet.add(task2);
myFleet.add(task3);
myFleet.add(task4);

let index: number = 1;
let array : Thing [] = myFleet.getThings();
array.forEach(element => {
    console.log(index + " " + (element.getCompleted() ? "[X] " : "[ ] ") + element.getName());
    index++;
});