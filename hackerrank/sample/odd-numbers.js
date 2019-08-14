function oddNumbers(l, r) {
    var result = [];
    while(l <= r) {
        if(l % 2 !== 0) {
            result.push(l);
        }
        l++;
    }
    return result;
}
