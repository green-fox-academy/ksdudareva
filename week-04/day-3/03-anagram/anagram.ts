'use strict';

// Write a function, that takes two strings and 
// returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function compare(a: string, b: string){
    let y = a.split("").sort().join(""),
        z = b.split("").sort().join("");

    if (y === z) {
        return true;
    } else {
        return false;
    }
}
