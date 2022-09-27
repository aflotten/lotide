const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (sentence) {
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

console.log(countLetters("lighthouse in the house"));