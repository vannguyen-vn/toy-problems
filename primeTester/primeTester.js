var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  if (n === 1) {
    return false
  }
  // TODO: return true if n is prime, false otherwise
  var divider = Math.floor(n / 2)
  while (divider > 1) {
    if (n % divider === 0) {
      return false;
    } else {
      divider--;
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



