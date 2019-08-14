function staircase(n) {
    let result = "";
    let nl = "\n";
    let min = 1;
    let max = n;

    while (min <= n) {
        result += mkSpc(max - 1);
        result += mkHash(min);
        result += nl;

        min++;
        max--;
    }

    console.log(result);
}

function mkHash(n) {
    let result = "";
    let mkHash = "#";

    for (var i = 0; i < n; i++) {
        result += mkHash;
    }

    return result;
}

function mkSpc(n) {
    let result = "";
    let spc = " ";

    for (var i = 0; i < n; i++) {
        result += spc;
    }

    return result;
}
