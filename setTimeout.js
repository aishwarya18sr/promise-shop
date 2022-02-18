const timer = (callback) => {
  setTimeout(() => {
    console.log('TIMED OUT!');
    callback();
  }, 1700);
};

module.exports = timer;
