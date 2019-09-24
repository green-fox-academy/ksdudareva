// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyStuff (fileName1: string, fileName2: string) {
    try {
    let fileContent = fs.readFileSync(fileName1, 'utf-8');
    fs.writeFileSync(fileName2, fileContent, 'utf8');
    }

    catch {
        console.log('Unable to copy file: my-file.txt');
    }

}
let fileName1 = 'my-file.txt';
let fileName2 = 'new-file.txt'

copyStuff(fileName1, fileName2)