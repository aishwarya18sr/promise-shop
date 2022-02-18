const checkPromise = () => {
  const promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
  });
  return promise;
};
  
const onReject = (error) => {
  console.log(error.message);
};

checkPromise().then(console.log,onReject);

module.exports = checkPromise;