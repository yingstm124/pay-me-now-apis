import * as exampleService from "../../services/example.service";

describe("exampleService test", () => {
    it("should 1 + 2 = 3", () => {
        expect(exampleService.add(1,2)).toBe(3);
    });
});
