export {};

'use strict';

//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let star: string = "*";


for (let i = lineCount; i > 0; i--) {
    let space: string = "";
    for (let j = 0; j < i; j++) {
        space += " ";
    }
    console.log(space + star);
    star += "**";

}

