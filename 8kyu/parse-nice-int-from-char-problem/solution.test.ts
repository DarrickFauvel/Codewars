import { get_age } from "./solution.js"

import { strictEqual } from "assert"

describe("Parse nice int from char problem", () => {
  it("Sample tests", () => {
    strictEqual(get_age("2 years old"), 2)
    strictEqual(get_age("4 years old"), 4)
    strictEqual(get_age("5 years old"), 5)
    strictEqual(get_age("7 years old"), 7)
  })
})
