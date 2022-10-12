const assertEqual = require("../assertEqual");
const tail = require("../tail");

const array = [1, 2 ,3, 4, 5];
console.log(assertEqual(tail(array), [2, 3, 4, 5]));