const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt

let text = fs.readFileSync('duplicated-chars.txt', 'utf-8');
let textLines: string[] = text.split('\n');
let newLines: string = '';
let newText: string = ''
let charArray: string [];

for (let i: number = 0; i < textLines.length; i++) {
    newText = textLines[i];
    charArray = newText.split("");
    for(let j = 1; j < charArray.length; j++){
        charArray.splice(j,1);
    }
    newLines += charArray.join("") + "\n";
}

console.log(newLines);


//создать стринг
//в лупе добавлять каждую вторую букву
