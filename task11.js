//zad 11 tabliczka mnożenia


var mnożenie = function multiplication(n) {

    var multi = "";

    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            multi = multi + (i + " x " + j + " = " + i * j + " | ");
        }

        console.log(multi);
        multi = "";

    }
}

//mnożenie(5)