const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const middle = (array) => {
  let outcome = [];
  let indexOfMiddle = 0;

  if (array.length <= 2) {
    return outcome;
  } else {
    if (array.length % 2 === 0) {
      indexOfMiddle = ((array.length / 2) - 1);
      outcome.push(array[indexOfMiddle]);
      indexOfMiddle = (array.length / 2);
      outcome.push(array[indexOfMiddle]);
    } else {
      indexOfMiddle = Math.floor(array.length / 2);
      outcome.push(array[indexOfMiddle]);
    }
  }
  return outcome;
};

module.exports = middle;