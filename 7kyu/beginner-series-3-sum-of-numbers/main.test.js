import { assert as _assert, config } from "chai"
const assert = _assert
config.truncateThreshold = 0

import { getSum } from "./main.js"

describe("Beginner Series #3 Sum of Numbers", () => {
  it.skip("Testing for fixed tests", () => {
    assert.strictEqual(getSum(0, -1), -1)
    assert.strictEqual(getSum(0, 1), 1)
    assert.strictEqual(getSum(2, 2), 2)
  })
})
