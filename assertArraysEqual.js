const eqArrays = require("./eqArrays")

const assertArraysEqual = (array1, array2) => {
  let outcome = "";

  if (eqArrays(array1, array2)) {
    outcome += `✅✅✅ Assertion Passed: [${array1}] === [${array2}]`;
  } else {
    outcome += `🔴🔴🔴 Assertion Failed: [${array1}] !== [${array2}]`;
  }
  return outcome;
};

module.exports = assertArraysEqual;