import { strictEqual } from "assert"

import { solution } from "./main.js"

describe("String ends with?", () => {
  it.skip("'abcde' ends with 'cde'", () => {
    strictEqual(solution("abcde", "cde"), true)
  })
  it.skip("'abcde' does not end with 'abc'", () => {
    strictEqual(solution("abcde", "abc"), false)
  })
})
