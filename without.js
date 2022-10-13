const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

const without = (source, itemsToRemove) => {
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


