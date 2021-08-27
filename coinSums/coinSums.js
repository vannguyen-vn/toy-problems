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

// input number
// output numer - the amount of ways the money could be used to add up to input number
// constraints - can only use England currency options
// edge cases - ?

var currencyValues = [200, 100, 50, 20, 10, 5, 2, 1]

var makeChange = function(total) {

  if (total === 1 || total === 2) {
    return 1
  }

var amount = total
var count = 0
// for each value in the array
for (var i = 0; i < currencyValues.length; i++) {
  // while the total minus current value ! = 0
  amount -= currencyValues[i]
  count++
}
return count
};

// Ex:
var test1 = makeChange(100)
console.log(test1)
var test2 = makeChange(2)
console.log(test2)


// var totalCombos = makeChange()
// // is there a way to count how many times recursion is used?