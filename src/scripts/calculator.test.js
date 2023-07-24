import calculator from "./calculator.js";

test('Add', () => {
  expect(calculator.add(11, 10)).toBe(21);
})

test('Substract', () => {
  expect(calculator.substract(10, 5)).toBe(5);
})

test('Multiply', () => {
  expect(calculator.multiply(120, 15)).toBe(1800);
})

test('Divide', () => {
  expect(calculator.divide(150, 3)).toBe(50);
})