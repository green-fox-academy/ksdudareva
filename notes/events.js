import { createPublicKey } from "crypto";

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){

        const li = e.target.parentElement;

        li.parentNode.removeChild(li);
    })
})

//////////

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevented');

})

//event bubbling

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

///////////


const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
})


//////////////

document.addEventListener('DOMCOntendLoaded', function(){});


//////////////
//click
//mouseenter
//mouseleave
//mousedown
//mouseup
//mousemove
//keydown
//keyup
//blur
//focus