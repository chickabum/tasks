// sprawdza czy z podanych liczb można zbudowac trójkąt

var a = 10;
var b = 11;
var c = 19;

if (((a + b) > c) && ((c + b) > a) && ((a + c) > b)) {
    console.log(" tak to może być trójkąt");
} else {
    console.log("to nie może być trójkąt");
}