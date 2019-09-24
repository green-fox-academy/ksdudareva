// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');

function writeName (filename: string) {
    try {
    let fileContent = 'Ksenia';
    fs.writeFileSync('my-file.txt', fileContent, 'utf8');
    }

    catch {
        console.log('Unable to write file: my-file.txt');
    }

}

writeName('my-file.txt')