'use strict';

import * as test from 'tape';
import { compare } from "./anagram";


test("test anagram", t => {
    let string1 = "listen";
    let string2 = "silent";
    let actual: boolean = compare(string1, string2);
    let expected: boolean = true;

    t.equal(actual, expected);
    t.end();
});