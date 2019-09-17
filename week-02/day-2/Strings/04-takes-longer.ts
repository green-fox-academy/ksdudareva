'use strict';

// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let addTo: string = 'always takes longer than';
let pos1: number = 0;
let pos2: number = 20;

quote = quote.substring(pos1, pos2) + ' ' + addTo + quote.substring(pos2);
console.log(quote);