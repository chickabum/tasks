function palindrom () {
	var slowo = prompt ("podaj słowo");

	var i = 0;
	var j = slowo.length - 1;

	while (i<j) {
		 if (slowo[i] != slowo[j]) {
		 	return false

		 	++i;
			--j;

		} else {
			return true
		}	
	}
}

function palindrom1 (word) {

	if (word === word.split("").reverse().join("")) {
		return true
	} else {
		return false
	}
}