const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");

const array = [1, 2];
console.log(assertArraysEqual(tail(array), [2]));