import { strictEqual } from "assert"

import { maskify } from "./solution.js"

describe("Credit Card Mask", function () {
  it("should work for some examples", function () {
    strictEqual(maskify("4556364607935616"), "############5616")
    strictEqual(maskify("1"), "1")
    strictEqual(maskify("11111"), "#1111")
  })
})
