const checkPromise = require('../fulFillPromise.js');

describe('checkPromise', function() {
  test('should return the data FULFILLED!', () => {
    return checkPromise().then(data => {
      expect(data).toBe('FULFILLED!');
    });
  });
  test('should not return any other data', () => {
    return checkPromise().then(data => {
      expect(data).not.toBe('NOT FULFILLED!');
    });
  });
});