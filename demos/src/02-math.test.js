const {sum, multiply, divide, average} = require('./02-math.js')

test("add 1 + 3 should be 4", () => {
  const result = sum(1,3);
  expect(result).toBe(4)
})

test("should be 4", () => {
  const result = multiply(1,4);
  expect(result).toBe(4)
})

test("should divide", () => {
  const result = divide(6,3);
  expect(result).toBe(2)
  const result2 = divide(6,"");
  expect(result2).toBe(2)
  const result3 = divide(6,0);
  expect(result3).toBe()
})

test("Average of nothing should be 0", () => {
 const values = [];
 const result = average(values);
 expect(result).toBeNull();
})

