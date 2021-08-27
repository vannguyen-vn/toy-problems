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
  var values = {
    '1p': 1,
    '2p': 2,
    '5p': 5,
    '10p': 10,
    '20p': 20,
    '50p': 50,
    '£1': 100,
    '£2': 200
  }

  var coins = Object.keys(values);
  //find one possibility:
  // iterate across object keys (starting at end)
  //  if the key is less than or equal to total
  //    set firstCoin variable (or add to coins array?)
  //    if total value of coins is still less than value
  //      run again on remaining amount (total minus total value of coins)

  var findCombo = function(total, highestValueIndex) {
    var combo = [];
    var sumOfCoins = 0;
    for (var i = highestValueIndex; i >= 0; i--) {
      if (sumOfCoins + values[coins[i]] <= total) {
        combo.push(coins[i]);
        sumOfCoins += values[coins[i]];
      }
    }
    if (sumOfCoins === total) {
      return combo;
    } else {
      combo.concat(findCombo(total - sumOfCoins, highestValueIndex - 1));
    }
  }

  //find all possibilities:
  //  find one possibility
  //  add it to an array
  //  find a second possibility
  //  if it exists in the array, search again starting at next-to-last key
};


