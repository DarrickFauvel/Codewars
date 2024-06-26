import { assert as _assert, config } from "chai"
const assert = _assert
config.truncateThreshold = 0

import { maps } from "./main.js"

describe("Lost Without a Map", () => {
  it.skip("Fixed tests", () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6])
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8])
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4])
  })
})
