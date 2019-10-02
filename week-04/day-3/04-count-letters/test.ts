  
import * as test from 'tape'
import { Letter } from './count-letters';

test ('count letters', t => {
    let testString = new Letter;
    let testWord:string = 'malna';
    const actual = testString.countLetters(testWord);
    const expected = { m: 1, a: 2, l: 1, n: 1 };

    t.equal(actual, expected);
    t.end();
});