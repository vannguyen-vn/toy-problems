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

var makeChange = function (total) {
  var count = 1;
  var calculateChangeOptions = (total) => {
    if (total / 2 >= 1) {
      count += Math.floor(total / 2);
      calculateChangeOptions(total % 2);
    }
    if (total / 5 >= 1) {
      count += Math.floor(total / 5);
      calculateChangeOptions(total % 5);
    }
    if (total / 10 >= 1) {
      count += Math.floor(total / 10);
      calculateChangeOptions(total % 10);
    }
    if (total / 20 >= 1) {
      count += Math.floor(total / 20);
      calculateChangeOptions(total % 20);
    }
    if (total / 50 >= 1) {
      count += Math.floor(total / 50);
      calculateChangeOptions(total % 50);
    }
    if (total / 100 >= 1) {
      count += Math.floor(total / 100);
      calculateChangeOptions(total % 100);
    }
    if (total / 200 >= 1) {
      count += Math.floor(total / 200);
      calculateChangeOptions(total % 200);
    }
  }
  calculateChangeOptions(total);
  return count;
};
//module.exports = makeChange;


