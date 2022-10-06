const Employee = require("../lib/Employee");
describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee(
      "Testy",
      1,
      "Testy@testcase.email",
      "Employee"
    );
  });

  describe("getName", () => {
    it("you got the name!", () => {
      const printedName = employee.getName();
      expect(printedName).toBe("Testy");
    });
  });
  describe("getId", () => {
    it("You got the ID", () => {
      const printedId = employee.getId();
      expect(printedId).toBe(1);
    });
  });
  describe("getEmail", () => {
    it("You got the email!", () => {
      const printedEmail = employee.getEmail();
      expect(printedEmail).toBe("Testy@testcase.email");
    });
  });
});