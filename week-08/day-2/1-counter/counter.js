'use strict';
    //   On the click of the button,
    //   Count the items in the list
    //   And display the result in the result element.

    const btn = document.querySelector('button');
    const list = document.querySelectorAll('li');

    const result = document.querySelector('.result'); 

    btn.addEventListener('click', () => {
        result.innerHTML = list.length;
    })