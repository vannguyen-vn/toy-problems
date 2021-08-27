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
/*
Input  = number (total)
coins = [1,2,5,10,20,50,100,200]
Output = array (return all possible decision paths)
Pseudocode
// create result = []
// create makeChangeSofar = []
// create a helper function to check: currentTotal, makeChangeSoFar
  // If currTotal = total
    // push total into result
    // return
  // If currTotal >  total
    // return
  // Go though the coins
    // Move to next and do recursion
    // With currentTotal += coins[i] and add coins[i] into makeChangeSoFar
  // kick-off the recursive: with currentTotal = 0; coins, makeChangeSoFar = []
// return reuslt;
 */


var makeChange = function(total) {

  var coins = [1,2,5,10,20,50,100,200]
  var result = [];
  var makeChangeSoFar = [];

  var makeChangeFunction = function(currentTotal, coins , makeChangeSoFar) {
    if (currentTotal === total) {
      result.push(makeChangeSoFar);
      return;
    }

    if (currentTotal > total) {
      return;
    }
    for ( var coin of coins) {
      makeChangeFunction(currentTotal + coin, coins,makeChangeSoFar.concat(coin));
    }
  }
  makeChangeFunction(0, coins, []);
  return result;
};



