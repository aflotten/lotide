const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = (array, callback) => {
  let result = [];

  for (const item of array) {
    const good = callback(item);
    if (!good) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;
