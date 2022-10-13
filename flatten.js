const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");


const flatten = (array) => {
  let outcome = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) { //use !Array to determine if element value is not an array
      outcome.push(array[i]); //pushes these arrays to outcome
    }
    else {
      for (let j = 0; j < array[i].length; j++) { // use array[i] for the nested arrays case
        outcome.push(array[i][j]); //pushes [j] items [nested arrays] to first level arrays
      }
    }
  }
  return outcome;
};

module.exports = flatten;
