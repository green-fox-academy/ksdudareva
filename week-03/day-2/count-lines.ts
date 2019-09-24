// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function readFile (filename: string) {
try {
    let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
    let fileContentLines = fileContent.split('\n');
    console.log(fileContentLines.length);
}

catch (error) {
    console.log('0')
}
}

readFile('my-file.txt');