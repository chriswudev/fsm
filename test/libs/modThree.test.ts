import { getModThree } from '../../libs';

test('getModThree', () => {
  expect(getModThree('110')).toBe(0);
  expect(getModThree('1010')).toBe(1);
});
