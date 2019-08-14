// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let result = '';
    let start1 = x1;
    let rate1 = v1;
    let start2 = x1;
    let rate2 = v2;

    if (rate1 < rate2) {
        result = 'NO';
    } else if (start1 === start2) {
        result = 'YES';
    } else if (start1 < start2) {
        start1 += rate1;
        start2 += rate2;
        return result = kangaroo(start1, rate1, start2, rate2);
    } else if (start1 > start2) {
        result = 'NO';
    }

    return result;
}
