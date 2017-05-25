//15 funkca 

function giveBigger(a, b, c) {

    var a = prompt("podaj a");
    var b = prompt("podaj b");
    var c = prompt("podaj c");

    if ((a > b) && (a < c)) {
        return a;
    } else if ((b > c) && (b > a)) {
        return b;
    } else if ((c > a) && (c > b)) {
        return c;
    }
}