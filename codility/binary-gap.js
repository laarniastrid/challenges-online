function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var result = 0;
    var bin = (+(N.toString())).toString(2);
    var splitBin = bin.split('');
    var tempArr = [];
    splitBin.map(function(e, i) {
        if(e === '1') {
            tempArr.push(i);
        }
        return;
    })
    
    if(tempArr !== 1 && tempArr.length !== splitBin.length) {
        for(var i = 0; i < tempArr.length - 1; i++) {
            var tempLen = tempArr[i + 1] - tempArr[i];
            result = tempArr[i + 1] - tempArr[i] > result ? tempLen - 1 : result;
        }
    }

    return result;
}

// cleanup 1
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var result = 0;
    var tempArr = [];
    var bin = (+(N.toString()))
        .toString(2)
        .split('')
        .map(function(e, i) {
            if(e === '1') {
                tempArr.push(i);
            }
        });
    
    if(tempArr !== 1 && tempArr.length !== bin.length) {
        for(var i = 0; i < tempArr.length - 1; i++) {
            var tempLen = tempArr[i + 1] - tempArr[i];
            result = tempArr[i + 1] - tempArr[i] > result ? tempLen - 1 : result;
        }
    }

    return result;
}
