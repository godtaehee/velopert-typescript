"use strict";
function sumaArray(number) {
    return number.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumaArray([1, 2, 3]);
console.log(total);
