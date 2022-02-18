require('es6-promise');
const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
    fulfill('FULFILLED!');
    },1700);
  });

promise.then(value => {console.log(value)});

