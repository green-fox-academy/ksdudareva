export { };

'use strict';

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];
let aString: string = "a";
animals.forEach(function add(i) {
    console.log(i + aString);
})