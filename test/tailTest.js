const eqArrays = require("../eqArrays");
const tail = require("../tail");
const assert = require("chai").assert;


describe("#Tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.isTrue(eqArrays(tail([1, 2, 3]), [2, 3]));
  });

  it("returns [] for ['5']", () => {
    assert.isTrue(eqArrays(tail(['5']), []));
  });

  it("return fail when given full array", () => {
    assert.isFalse(eqArrays(tail([1, 2, 3, 4]), [1, 2, 3, 4]));
  });

});