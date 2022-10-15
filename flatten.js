const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");


const flatten = (array) => {
  let outcome = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      outcome.push(array[i]);
    }
    else {
      for (let j = 0; j < array[i].length; j++) {
        outcome.push(array[i][j]);
      }
    }
  }
  return outcome;
};

module.exports = flatten;
