'use strict'

import * as test from 'tape';
import { Apple } from "./apples";

test("test apple string", t => {
    let mac = new Apple;
    let actual: string = mac.getApple();
    let expected: string = "This is Apple";

    t.equal(actual, expected);
    

    let macintosh = new Apple;
    let actualFail: string = macintosh.getApple();
    let expectedFail: string = "This is Samsung";

    t.equal(actualFail, expectedFail);

    let iPhone = new Apple;
    let actualI: string = iPhone.getApple();
    let expectedI: string = "This is Apple";

    t.equal(actualI, expectedI);

    t.end();
});