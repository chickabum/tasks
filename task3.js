// ocena z punktów

function mark(points) {

    if (points < 40) {
        console.log("ocena niedostateczna");
    } else if (points < 55) {
        console.log("ocena dopuszczająca")
    } else if (points < 85) {
        console.log("ocena dostateczn")
    } else if (points < 55) {
        console.log("ocena dobra")
    } else {
        console.log("ocena bardzo dobra")
    }
};

//mark(20)