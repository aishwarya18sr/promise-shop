const timer = require('../setTimeout.js');

describe('timer function', function() {
    it.only('should execute a function after 1700 ms', () => {
      const spy = jest.spyOn(global, 'setTimeout');
      timer();    
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 1700);
    });
});