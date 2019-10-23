'use strict';

//       1) replace the list items' content with items from this list:
//       ['apple', 'banana', 'cat', 'dog']

let toReplace = document.getElementsByTagName('li');
let replaceWith = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < toReplace.length; i++) {
    toReplace[i].innerText = replaceWith[i];
}

//       2) change the <ul> element's background color to 'limegreen'
//         - use css class to change the color instead of the style property

let stuff = document.getElementsByTagName('ul');
stuff[0].setAttribute('class', 'stuff');