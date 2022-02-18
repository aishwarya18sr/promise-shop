const checkPromise = require('../alwaysAsynchronous.js');

describe('checkPromise', function() {
  test('should print MAIN PROGRAM before PROMISE VALUE', () => {
    const spy = jest.spyOn(console,'log');
    checkPromise();
    expect(spy).toHaveBeenNthCalledWith(1,'MAIN PROGRAM');
    return checkPromise().then(data => {
      expect(data).toBe('PROMISE VALUE');
    });
  });
  test('should not print MAIN PROGRAM after PROMISE VALUE', () => {
    const spy = jest.spyOn(console,'log');
    checkPromise();
    expect(spy).not.toHaveBeenLastCalledWith('PROMISE VALUE');
    return checkPromise().then(data => {
      expect(data).toBe('PROMISE VALUE');
    });
  });
});