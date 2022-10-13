const eqArrays = require("../eqArrays");
const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("should return the value at the middle index of an odd number length array ", () => {
    assert.isTrue(eqArrays(middle([1, 2, 3]), [2]));
  });

  it("should return two values at the middle indexs of an even number length array ", () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  });

});