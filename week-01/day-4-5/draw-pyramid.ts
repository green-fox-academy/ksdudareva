export {};

'use strict';

let lineCount: number = 4;
let asterisk: string = "*";
let space: string = "";

for (let i = lineCount; i > 0; i--) {
    let space: string = "";
    for (let j = 0; j < i; j++) {
        space += " ";
    } 
    console.log(space + asterisk);
    asterisk += "**";

}