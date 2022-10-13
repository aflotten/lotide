const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#eqArray", () => {
  it("should return true for 2 identical arrays", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should return flase for arrays of unequal length", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 3, 4]));
  });

  it("should return false for arrays with same content unsorted", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 3, 2]));
  });

});