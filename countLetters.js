const assertEqual = require("./assertEqual");

const countLetters = (sentence) => {
  let count = {};
  for (const letters of sentence) {
    if (letters !== " ") {
      if (!count[letters]) {
        count[letters] = 1;
      } else {
        count[letters]++;
      }
    }
  }
  return count;
};

module.exports = countLetters;