require('es6-promise');
const checkPromise = () => {
  const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
      fulfill('FULFILLED!');
    },1700);
  });
  return promise;
};

checkPromise().then(value => {console.log(value);});

module.exports = checkPromise;

