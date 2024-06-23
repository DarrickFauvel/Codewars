const assert = require("assert")

const { lovefunc } = require("./main.js")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(lovefunc(1, 4), true)
    assert.strictEqual(lovefunc(2, 2), false)
    assert.strictEqual(lovefunc(0, 1), true)
    assert.strictEqual(lovefunc(0, 0), false)
  })
})
