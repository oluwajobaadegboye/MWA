function even(arr) {

    return setTimeout(function () {
        let evenarr = [];
        arr.forEach(function (ele) {
            if (ele % 2 === 0) {
                evenarr.push(ele)
            }
        });
        return evenarr;
    }, 0);

}

function odd(arr) {

    return setTimeout(function () {
        let oddarr = [];
        arr.forEach(function (ele) {
            if (ele % 2 !== 0) {
                oddarr.push(ele)
            }
        });
        return oddarr;
    }, 0);

}

console.log("start");
console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("end");



