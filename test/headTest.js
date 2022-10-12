const assertEqual = require("../assertEqual");
const head = require("../head");

const array = [1, 2, 3, 4];
console.log(assertEqual(head(array), 1));