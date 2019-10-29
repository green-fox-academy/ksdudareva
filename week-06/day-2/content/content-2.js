'use strict';

//       1) replace the list items' content with items from this list:
//       ['apple', 'banana', 'cat', 'dog']

let oldList = document.getElementsByTagName("li");
let newList = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < oldList.length; i++) {
    oldList[i].textContent = newList[i];
}

//       2) change the <ul> element's background color to 'limegreen'
//         - use css class to change the color instead of the style property

//without CSS file
let newUl = document.getElementsByTagName("ul");
newUl[0].setAttribute("style", "background-color: limegreen;");



//with CSS file
// let stuff = document.getElementsByTagName('ul');
// stuff[0].setAttribute('class', 'stuff');