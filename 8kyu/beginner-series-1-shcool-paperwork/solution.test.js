import { strictEqual } from "assert";
import { paperwork } from "./solution.js";
describe("Beginner Series #1 School Paperwork", function () {
    it("Fixed tests", () => {
        strictEqual(paperwork(5, 5), 25, "Failed at paperwork(5, 5)");
        strictEqual(paperwork(5, -5), 0, "Failed at paperwork(5, -5)");
        strictEqual(paperwork(-5, -5), 0, "Failed at paperwork(-5, -5)");
        strictEqual(paperwork(-5, 5), 0, "Failed at paperwork(-5, 5)");
        strictEqual(paperwork(5, 0), 0, "Failed at paperwork(5, 0)");
    });
});
