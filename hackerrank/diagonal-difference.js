'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the diagonalDifference function below.
 */
function diagonalDifference(a) {
    /*
     * Write your code here.
     */
    var result;
    var num1 = 0;
    var num2 = a.length - 1;
    var primary = [];
    var secondary = [];
    
    for (var i = 0; i < a.length; i++) {
        primary.push(a[i][num1]);
        secondary.push(a[i][num2]);
        num1++;
        num2--;
    }
    
    primary = primary.reduce(function(a, b) {
        return a + b;
    }, 0);
    secondary = secondary.reduce(function(a, b) {
        return a + b;
    }, 0);

    result = Math.abs(primary - secondary);    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let a = Array(n);

    for (let aRowItr = 0; aRowItr < n; aRowItr++) {
        a[aRowItr] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    let result = diagonalDifference(a);

    ws.write(result + "\n");

    ws.end();
}
