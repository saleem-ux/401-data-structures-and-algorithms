'use strict';

function fiboFunction(n){

    let fiboArray = [0, 1];
    for (let i = 2; i <= n + 1; i++) {
        fiboArray.push(fiboArray[i - 2] + fiboArray[i - 1])
    }
    return fiboArray[n];
}

console.log(fiboFunction(14));

module.exports = fiboFunction