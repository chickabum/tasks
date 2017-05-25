
//zad 7
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
var n = 5;
var stars = '';

for(var i = 0; i < n; i ++) {
	for (var j = 0; j < n; j++) {
		stars = stars + "*";
		//console.log(stars);
	};
	console.log(stars);
	//zeruje licznik 
	stars = '';
}

// zad 8
// *
// * *
// * * *
// * * * *
// * * * * *

var n = 5;
stars = ""
for (var i = 1; i <= n; i++) {
	//po co i jak uzyć tej pętli?
    // for (var j = 1; j <= n; j++) {

    // }
    stars = stars + "*"
    console.log(stars);
}

var n = 5;
var stars = "";

// for (var i = 0; i < n; i++) {
// 	for (var j = 0; j <= i; j++) {
// 		stars = stars + "*";
// 	};
// 	console.log(stars);
// 	stars = "";
// };

for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if (j <= i) {
			stars = stars + "*";
		};
	};
	console.log(stars);
	stars = "";
};


//zad 9
//   *   *   
// *   *   *
//   *   *  
// *   *   *
//   *   *  


for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if ((j + i)%2===0) {
			stars = stars + "*";
		} else {
			stars = stars + " "
		};
	};
	console.log(stars);
	stars = "";
};

// zad 10
// * 2 3 4 5
// * * 3 4 5
// * * * 4 5
// * * * * 5
// * * * * *
// * * * * *
// * * * * 5
// * * * 4 5
// * * 3 4 5
// * 2 3 4 5

var n = 5;
var stars = "";

for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++) {
		if (j <= i) {
			stars = stars + "*";
		} else {
			stars = stars + (j+1);
		}
	};
	console.log(stars);
	stars = "";
};

///

for(var i=1; i<=n; i++) {
	for(var j=1; j<=n; j++) {   

		if(i<n-j+2) {				
			stars = stars + "*";
		} else {
			stars = stars + j;
		}
	}
	console.log(stars);
	stars='';
};
///

