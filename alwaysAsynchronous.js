const checkPromise = () => {
  const promise = new Promise(function (fulfill,reject) {
    fulfill('PROMISE VALUE');
    console.log('MAIN PROGRAM');
  });
  return promise;
};

checkPromise().then(console.log,null);

module.exports = checkPromise;
