const eqArrays = function(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      
      return false, `🛑🛑🛑 Assertion failed: These arrays do not match!`;
    }
  }
  
  return true, `✅✅✅ Assertion passed: These arrays match!`;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const flatten = function(array) {
  let outcome = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) { //use !Array to determine if element value is array
      outcome.push(array[i]); //pushes these arrays to outcome
    }
    else {
      for (let j = 0; j < array[i].length; j++) { //iterates over confirmed arrays
        outcome.push(array[i][j]); //pushes confirmed arrays to one array
      }
    }
  }
  return outcome;
};
