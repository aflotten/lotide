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

const middle = function(array) {
  let outcome = [];
  let indexOfMiddle = 0;

  if (array.length <= 2) {
    return outcome;
  } else {
    if (array.length % 2 === 0) {  //if array.length is an even num
      indexOfMiddle = ((array.length / 2) - 1);
      outcome.push(array[indexOfMiddle]);
      indexOfMiddle = (array.length / 2); // here we are dealing with returning two indexes of the new array
      outcome.push(array[indexOfMiddle]);
    } else { // if array.length is odd
      indexOfMiddle = Math.floor(array.length / 2); // use Math.floor to pull out a number
      outcome.push(array[indexOfMiddle]);
    }
  }
  return outcome;
};
