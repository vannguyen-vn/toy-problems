var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  if (n === 1) {
    return false
  }
  // TODO: return true if n is prime, false otherwise
  for (var i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

var primeSieve = function (start, end) {
  var primeList = []
  for (var i = start; i <= end; i++) {
    if (primeTester(i)) {
      primeList.push(i)
    }
  }
  return primeList
};



