const assertArraysEqual = require("../assertArraysEqual");

let array1 = [1, 2, 3, "a", "b"];
let array2 = [1, 2, 3, "a", "b"];

console.log(assertArraysEqual(array1, array2));