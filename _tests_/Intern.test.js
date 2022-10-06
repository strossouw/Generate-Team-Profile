
const Intern = require("../lib/Intern");

describe("Intern", () => {
  let intern;
  beforeEach(() => {
    intern = new Intern(
        "Testy",
        1,
        "Testy@testcase.email", 
        "UW-Milwaukee"
        );
  });

  describe("getSchool", () => {
    it("you got the school", () => {
      const result = intern.getSchool();
      expect(result).toBe("UW-Milwaukee");
    });
  });

});