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


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let isItemToRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        isItemToRemove = true;
      }
    } if (isItemToRemove === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;


