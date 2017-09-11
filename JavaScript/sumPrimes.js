function isPrime(trial) {
  for (var m = 2; m < trial; m++) {
    if (trial % m === 0) {
      return false;
    }
  }
  return true;
}


function sumPrimes(num) {
  var arr = [];
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  var sum = arr.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  return sum;
}
