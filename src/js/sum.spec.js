// Import the functions or modules you want to test
import { sum } from './sum.js';

// Write your test cases using the test() function provided by Jest
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
