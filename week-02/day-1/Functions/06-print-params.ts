export {};

'use strict';


// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(name: string, age: number, occupation: string) {
    console.log(name);
    console.log(age);
    console.log(occupation);

}

printParams("Ksenia", 28, "software developer");