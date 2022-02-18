const timer = require('../setTimeout.js');

describe('timer function', function() {
    it('should execute a function after 1700 ms', () => {
      const spy = jest.spyOn(global, 'setTimeout');
      timer();    
      expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 1700);
    });
    it('should not execute a function after 1700 ms', () => {
      const spy = jest.spyOn(global, 'setTimeout');
      timer();    
      expect(spy).not.toHaveBeenLastCalledWith(expect.any(Function), 1800);
    });
    it('should not execute a function before 1700 ms', () => {
      const spy = jest.spyOn(global, 'setTimeout');
      timer();    
      expect(spy).not.toHaveBeenLastCalledWith(expect.any(Function), 1600);
    });
});