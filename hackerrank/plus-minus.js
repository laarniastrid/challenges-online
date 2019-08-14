'use strict';

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
 * Complete the plusMinus function below.
 */
function plusMinus(arr) {
    /*
     * Write your code here.
     */
    // var pos, neg, zero = 0;
    var len = arr.length;
    var nums = [0, 0, 0];
    var result = [];
    arr.forEach(function(e) {
        if(e > 0) {
            nums[0]++;
        } else if (e < 0) {
            nums[1]++;
        } else if (e === 0) {
            nums[2]++;
        }
    });
    nums.forEach(function(e) {
        var temp = (e / len).toFixed(6);
        console.log(temp);
    })
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
