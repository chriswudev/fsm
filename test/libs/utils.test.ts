import { arrayIncludes } from '../../libs';

test('arrayIncludes', () => {
  expect(arrayIncludes([2, 3, 4], [2, 4])).toBe(true);
  expect(arrayIncludes([2, 3, 4], [2, 5])).toBe(false);
});
