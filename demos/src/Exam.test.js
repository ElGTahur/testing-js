const {subtract, even} = require('./Exam');


test('subtract 3 - 2 to equal 3', () => {
  expect(subtract(15, 5)).toBe(10);
})

test('subtract 3 - 2 to equal 3', () => {
  expect(subtract(10, 15)).toBe(-5);
})

test('24 is Even', () => {
  expect(even(24)).toBe(true)
})

test('25 is Even', () => {
  expect(even(25)).toBe(false)
})

test('0 is Even', () => {
  expect(even(0)).toBe(true)
})
