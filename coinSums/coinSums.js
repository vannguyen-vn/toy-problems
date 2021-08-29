// Aug 27: complete (21 tests, 21 passed)

/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  var result = 0;

  var dfs = function(balance, coinOptions) {
    if (balance === 0) {
      result++;
      return;
    }

    for (var i = 0; i < coinOptions.length; i++) {
      if (coinOptions[i] <= balance) {
        dfs(balance - coinOptions[i], coinOptions.slice(i));
      }
    }
  }

  dfs(total, [200, 100, 50, 20, 10, 5, 2, 1]);

  return result;
};

/*

test cases

console.log('makeChange 1', makeChange(1)); // -> 1
console.log('makeChange 2', makeChange(2)); // -> 2
console.log('makeChange 3', makeChange(3)); // -> 2
console.log('makeChange 4', makeChange(4)); // -> 3
console.log('makeChange 50', makeChange(50));
*/





