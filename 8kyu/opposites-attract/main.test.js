import { strictEqual } from "assert"

import { lovefunc } from "./main.js"

describe("Opposites Attract", () => {
  it.skip("Testing for fixed tests", () => {
    strictEqual(lovefunc(1, 4), true)
    strictEqual(lovefunc(2, 2), false)
    strictEqual(lovefunc(0, 1), true)
    strictEqual(lovefunc(0, 0), false)
  })
})
