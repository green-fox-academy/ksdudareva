'use strict';

//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

let lineCount: number = 7;
let star: string = "*";
let space: string = "";

for (let i = lineCount-3; i > 0; i--) {
    let space: string = "";
    for (let j = 0; j < i; j++){
        space += " ";
    }
    console.log(space + star);
    star += "**";
};

for (let i = lineCount-4; i > 0; i--) {
    let star: string = "";
    for (let j = 0; j < 5; j+2) {
        star += "*";
    }
    space += " ";
    console.log(space + star);
}