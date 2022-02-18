const checkPromise = require('../rejectPromise.js');

describe('checkPromise', function() {
  test('should return the error REJECTED!', () => {
    expect.assertions(1);
    return checkPromise().catch(error => expect(error.message).toMatch('REJECTED!'));
  });
  test('should not return any other error', () => {
    expect.assertions(1);
    return checkPromise().catch(error => expect(error.message).not.toMatch('NOT REJECTED!'));
  });
});