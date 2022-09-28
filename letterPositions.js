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
    sentence = sentence.replace(" ",""); //remove spaces
    if (!results[sentence[i]]) { //use ! to determine if we haven't seen the character yet
      results[sentence[i]] = [i]; //push the index of our character location to the results object
    } else {
      results[sentence[i]].push(i); //if we have seen it, push the index of the next appearance to the same key. 
    }
  }
  return results;
};

console.log(letterPositions("Lighthouse labs is the shiz"));