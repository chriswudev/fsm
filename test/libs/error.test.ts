import { throwError } from '../../libs';

test('throwError', () => {
  try {
    throwError('error happened');
  } catch (error) {
    expect(error.message).toBe('error happened');
  }
});
