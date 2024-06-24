import { assert as _assert } from "chai"
const assert = _assert

import { evenOrOdd } from "./main.js"

describe("Sample tests", () => {
  it.skip("2 is even", () => {
    assert.strictEqual(evenOrOdd(2), "Even")
  })
  it.skip("7 is odd", () => {
    assert.strictEqual(evenOrOdd(7), "Odd")
  })
  it.skip("-42 is even", () => {
    assert.strictEqual(evenOrOdd(-42), "Even")
  })
  it.skip("-7 is odd", () => {
    assert.strictEqual(evenOrOdd(-7), "Odd")
  })
  it.skip("0 is even", () => {
    assert.strictEqual(evenOrOdd(0), "Even")
  })
})
