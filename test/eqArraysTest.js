const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(assertEqual(eqArrays(arr1, arr2), true));