function timeConversion(s) {
    let result = [];
    let temp = s.split(":");
    let timeObj = splitTime(temp);

    result.push(timeObj.hour);
    result.push(timeObj.min);
    result.push(timeObj.sec);

    return result.join(":");
}

function splitTime(t) {
    let result = {};

    result.ampm = t[2].slice(2).toLowerCase();
    result.hour = checkHour(Number(t[0]), result.ampm);
    result.min = t[1];
    result.sec = t[2].slice(0, 2);

    return result;
}

function checkHour(h, ampm) {
    let result = "";

    if (ampm === "pm" && h !== 12) {
        result = ((h + 12).toString());
    } else if (h === 12 && ampm === "am") {
        result = ("00");
    } else {
        result = (h.toString());
    }

    if (result.length === 1) {
        result = "0" + result;
    }

    return result;
}
