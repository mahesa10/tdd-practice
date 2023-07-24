import capitalize from "./capitalize.js";

test('Capitalize 1', () => {
  expect(capitalize('chelsea is the best club')).toBe('Chelsea is the best club');
});

test('Capitalize 2', () => {
  expect(capitalize('KEEP THE BLUE FLAG FLYING HIGH')).toBe('Keep the blue flag flying high');
});

test('Capitalize 3', () => {
  expect(capitalize('hAzARd iS thE bEst plAYeR')).toBe('Hazard is the best player');
});