const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      
      return false, `🛑🛑🛑 Assertion failed: These arrays do not match!`;
    }
  }
  return true, `✅✅✅ Assertion passed: These arrays match!`;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    sentence = sentence.replace(" ","");
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;
