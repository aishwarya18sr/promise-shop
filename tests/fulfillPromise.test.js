const promise = require('../fulFillPromise.js');

describe('promise', function() {
    it('should return the data FULFILLED!', () => {
        promise.then(data => {
          expect(data).toBe('FULFILLED!');
        });
      });
    it('should not return any other data', () => {
        promise.then(data => {
          expect(data).not.toBe('NOT FULFILLED!');
        });
      });
});