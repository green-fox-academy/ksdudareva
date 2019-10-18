export{}

// Write a method which can read and parse a file containing 
//not so family friendly text. The method must remove all the given words 
//from the file and return the amount of the removed words.

// Input

// ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']

// Output

// 17

'use strict';

const fs = require('fs');

//let content: string = fs.readFileSync('content.txt', 'utf-8');

function removeSwearWords (fileName:string, swearWords: string[]) {
    let textSplit = [];
    
    // reading the contents of a file 
    // if opening the file was unsuccessful, it throws an error message
    try {
        textSplit = fs.readFileSync(fileName, 'utf8').split('');
    }
    catch {
        console.log('File does not exist!');
        process.exit();
    }
    

}

