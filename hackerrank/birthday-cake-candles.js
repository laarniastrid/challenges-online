function birthdayCakeCandles(ar) {
    let result = 0;
    let len = ar.length;
    let max = Math.max(...ar)

    ar.forEach((e) => {
        if (e === max) {
            result++;
        }
    })
    
    return result;
}
