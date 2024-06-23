import { assert } from "chai"

import { past } from "./main.js"

describe("Beginner Series #2 Clock", () => {
  it.skip("Tests", () => {
    assert.strictEqual(past(0, 1, 1), 61000)
    assert.strictEqual(past(1, 1, 1), 3661000)
    assert.strictEqual(past(0, 0, 0), 0)
    assert.strictEqual(past(1, 0, 1), 3601000)
    assert.strictEqual(past(1, 0, 0), 3600000)
  })
})
