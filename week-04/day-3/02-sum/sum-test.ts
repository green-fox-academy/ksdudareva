'use strict';

// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empyt list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

import * as test from 'tape';
import { Numbers } from "./sum";

test("test sum", t => {
    let myArray = new Numbers([1, 2, 3, 4, 5]);
    let actual: number = myArray.sum();
    let expected: number = 15;

    t.equal(actual, expected);

    let myArrayOne = new Numbers([5]);
    let actual1: number = myArrayOne.sum();
    let expected1: number = 5;

    t.equal(actual1, expected1);

    let myArrayEmpty = new Numbers([]);
    let actualEmpty: number = myArrayEmpty.sum();
    let expectedEmpty: number = 0;
    
    t.equal(actualEmpty, expectedEmpty);

    t.end();
});