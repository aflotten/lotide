const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(ourArray) {
  for (let i = 0; i < ourArray.length; i++) {
    return ourArray[i]; //return entire array
  }
  return ourArray[0]; //return first element for assertEqual function
};
