const checkPromise = require('../rejectOrNotPromise.js');

describe('checkPromise', function() {
  test('should return the data I FIRED', () => {
    return checkPromise().then(data => {
      expect(data).toBe('I FIRED');
    });
  });
  test('should not return any other data', () => {
    return checkPromise().then(data => {
      expect(data).not.toBe('I DID NOT FIRE');
    });
  });
});