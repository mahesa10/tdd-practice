import caesarChiper from "./caesarChiper.js";

test('Caesar Chiper 1', () => {
  expect(caesarChiper('zyxwvutsrqponmlkjihgfedcba', 1)).toBe('azyxwvutsrqponmlkjihgfedcb');
})

test('Caesar Chiper 2', () => {
  expect(caesarChiper('Zhirkov', 1)).toBe('Aijslpw');
})

test('Caesar Chiper 3', () => {
  expect(caesarChiper('Billy & Joe', 1)).toBe('Cjmmz & Kpf');
})