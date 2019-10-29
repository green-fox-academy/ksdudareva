'use strict';

//     1)  Fill every paragraph with the last one's content.
//      Commented out 

// let lastParagraph = document.querySelector('.animals').textContent;
// let everyParagraph = document.querySelectorAll('p');
// for (let i = 0; i < everyParagraph.length; i++) {
//     everyParagraph[i].textContent = lastParagraph;
// }


//     2)  Do the same again, but you should keep the cat strong.

let lastParagraph = document.querySelector('.animals').innerHTML;
let everyParagraph = document.querySelectorAll('p');
for (let i = 0; i < everyParagraph.length; i++) {
    everyParagraph[i].innerHTML = lastParagraph;
}