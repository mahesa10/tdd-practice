import reverseString from "./reverseString.js";

test('Reverse string 1', () => {
  expect(reverseString('Chelsea')).toBe('aeslehC')
})

test('Reverse string 2', () => {
  expect(reverseString('javascript')).toBe('tpircsavaj')
})