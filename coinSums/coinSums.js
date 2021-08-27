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
  var units = [1, 2, 5, 10, 20, 50, 100, 200];
  var count = 0;

  // total is a number between 0 and javascript max integer, total is always an integer
  // for numbers with different endings:
  // 1: 10/100 * n + 1 (1 * 1)
  // 2: 10/100 * n + 1 + 1 OR 10/100 * n + 2 (2 options) (2 * 1 or 1 * 2)
  // 3: 10/100 * n + 1 + 1 + 1 OR 10/100 * n + 1 + 2 (2 options) (3 * 1 or 1 + 2)
  // 4: 10/100 * n + 1 + 1 + 1 + 1 OR 10/100 * n + 2 + 2 (2 options) (4 * 1 or 2 + 2)
  // 5: 10/100 * n + 1 + 1 + 1 + 1 + 1 OR 10/100 * n + 2 + 2 + 1 OR 10/100 * n + 5(4 options) (5 * 1 OR 3 * 1 + 2 OR 1 * 1 + 2 * 2 OR 5)
  // 6: (5 options) (6 * 1 OR 4 + 1 * 2 OR 2 + 2 * 2 OR 0 + 3 * 2 OR 1 + 5)
  // 7: 10/100 * n + 1 + 1 + 1 + 1 + 1 + 1 + 1 OR 10/100 * n + 2 + 2 + 2 + 1 OR 10/100 * n + 2 + 5 (3 options)

  // pattern:
  // 1. n * 1
  // 2. how many 2s?
  // 3. how many 5s?

  // return that count
};


