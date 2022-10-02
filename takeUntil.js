const takeUntil = function(array, callback) {
  let result = [];

  for (const item of array) {
    const good = callback(item); // callback to tell us when something is truthy
    if (!good) { //!good (if not good) push to array, else (if truthy) break
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};
