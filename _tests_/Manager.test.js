const Manager = require("../lib/Manager");
describe("Manager", () => {
  let manager;
  beforeEach(() => {
    manager = new Manager(
        "Testy",
        1,
        "Testy@testcase.email",
        "859"
        );
  });
  describe("getOfficeNumber", () => {
    it("You got the Office Number", () => {
      const printedOffNum = manager.getOfficeNumber();
      expect(printedOffNum).toBe("859");
    });
  });
});