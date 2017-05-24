//wypisz czy parzysta


var even = function() {
    var n = prompt("podaj liczbę");

    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i + " parzysta")
        } else {
            console.log(i + " nieparzysta");
        }
    }
}
//even()