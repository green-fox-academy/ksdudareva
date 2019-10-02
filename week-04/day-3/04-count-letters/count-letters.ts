'use strict';

// Write a function, that takes a string as an argument and 
// returns a dictionary with all letters in the string as keys, 
// and numbers as values that shows how many occurrences there are.
// Create a test for that.


export class Letter {
    countLetters(string: string) {
        let letters = {};
        let dictionary: string[] = string.split('');

        dictionary.forEach(function (element) {
            if (letters[element] === undefined) {
                letters[element] = 1;
            } else {
                letters[element] += 1;
            }
        });
        return letters;
    }
}