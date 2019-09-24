'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function divideByZero (i) {
    try {
        if (i == 0) {
            throw 'err'
        } else console.log(10/i)
        
    }
    catch(err) {
        console.log('fail')
    }
    
}

divideByZero(0);
