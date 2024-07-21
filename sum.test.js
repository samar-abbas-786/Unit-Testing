const sum = require("./index");
test("add 1 and 2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum is not equal to 0", () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(sum(i,j)).not.toBe(0);
    }
  }
});
