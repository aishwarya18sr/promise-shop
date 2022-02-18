const checkPromise = () => {
  const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {   
      reject(new Error('REJECTED!'));
    },1700);
  });
  return promise;
};
  
function onReject (error) {
  console.log(error.message);
}

checkPromise().then(() => {},onReject);

module.exports = checkPromise;
  