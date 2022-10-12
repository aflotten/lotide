const assertEqual = require("./assertEqual");

const eqArrays = (array1, array2) => {
  for (const item of array1) {
    if (array1[item] !== array2[item]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
