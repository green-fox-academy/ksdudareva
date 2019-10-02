'use strict'

import * as test from 'tape';
import { Sharpie } from "./../../week-03/day-3-4/04-sharpie";

test("test sharpie", t => {
    let blackSharpie = new Sharpie("black", 2.5, 400);
    let actual = blackSharpie.getInkamount();
    let expected = 400;

    t.equal(actual, expected);

    t.end();
});

test("test sharpie2", t => {
    let blackSharpie = new Sharpie("black", 2.5);
    let actual = blackSharpie.getInkamount();
    let expected = 100;

    t.equal(actual, expected);

    t.end();
});