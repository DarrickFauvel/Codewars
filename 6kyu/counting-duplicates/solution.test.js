import { strictEqual } from "assert";
import { duplicateCount } from "./solution.js";
describe("Counting Duplicates", function () {
    it("test", function () {
        strictEqual(duplicateCount(""), 0);
        strictEqual(duplicateCount("abcde"), 0);
        strictEqual(duplicateCount("aabbcde"), 2);
        strictEqual(duplicateCount("aabBcde"), 2, "should ignore case");
        strictEqual(duplicateCount("Indivisibility"), 1);
        strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");
    });
});
