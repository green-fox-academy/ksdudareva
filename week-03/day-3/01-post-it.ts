'use strict'

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }

}

let postIt1 = new PostIt('orange', 'Idea1', 'blue');
let postIt2 = new PostIt('pink', 'Awesome', 'black');
let postIt3 = new PostIt('yellow', 'Superb', 'green');


console.log(postIt1);
console.log(postIt2);
console.log(postIt3);