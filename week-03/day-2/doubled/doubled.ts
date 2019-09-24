const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt

let text = fs.readFileSync('duplicated-chars.txt', 'utf-8');
let textLines: string[] = text.split('\n');
let textLetters: string [][] = textLines.map(function (e) {
    return e.split('');
})

for (let i: number = 0; i < textLetters.length; i++){
    for(let j:number = 0; j < textLetters[i].length; j++) {
        if 
    }
}