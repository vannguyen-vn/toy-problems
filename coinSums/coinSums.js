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

// tabluation
var makeChange = function(total) {
  var table = new Array(total + 1).fill(Number.MAX_SAFE_INTEGER);
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  table[0] = 0;

  for (var i = 1; i < total + 1; i++) {
    coins.forEach(coin => {
      if (i >= coin && table[i] > i % coin) {
        table[i] = table[i - coin] + 1
      }
    });
  }
  return table[total];
};
