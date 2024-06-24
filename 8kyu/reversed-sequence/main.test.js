import { assert as _assert, config } from "chai"
const assert = _assert
config.truncateThreshold = 0

import { reverseSeq } from "./main.js"

describe("Reversed sequence", function () {
  it.skip("Sample Test", function () {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1])
  })
})
