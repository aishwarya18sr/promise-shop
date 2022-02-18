const timer = require('../setTimeout.js');

describe('timer function', function() {
  test('should execute a function after 1700 ms', done => {
    function callback() {
      try {
        expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 1700);
        done();
      } catch (error) {
        done(error);
      }
    }
    const spy = jest.spyOn(global, 'setTimeout');
    timer(callback);
  });
  test('should not execute a function after 1700 ms', done => {
    function callback() {
      try {
        expect(spy).not.toHaveBeenLastCalledWith(expect.any(Function), 1800);
        done();
      } catch (error) {
        done(error);
      }
    }
    const spy = jest.spyOn(global, 'setTimeout');
    timer(callback);
  });
  test('should not execute a function before 1700 ms', done => {
    function callback() {
      try {
        expect(spy).not.toHaveBeenLastCalledWith(expect.any(Function), 1600);
        done();
      } catch (error) {
        done(error);
      }
    }
    const spy = jest.spyOn(global, 'setTimeout');
    timer(callback);
  });
});