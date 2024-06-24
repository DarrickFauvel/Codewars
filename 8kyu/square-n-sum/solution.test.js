import { strictEqual } from "assert";
import { squareSum } from "./solution.js";
describe("Square(n) Sum", function () {
    it("Should return a number", function () {
        strictEqual(squareSum([1, 2]), 5);
        strictEqual(squareSum([0, 3, 4, 5]), 50);
        strictEqual(squareSum([]), 0);
    });
});
