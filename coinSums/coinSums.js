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

  var counter = 0

  var coinage = [0 ,1, 2, 5, 10, 20, 50, 100, 200]


  var helperFunction = function(base, coin) {

    if (base + coin > total || base === 0) {
      return;
    }

    if (base === total) {
      counter ++;
      helperFunction (base -1, coinage[0])
    }

    coinage.forEach(coin => helperFunction(base, coin));

  }

  coinage.forEach(coin => helperFunction(total, coin));


  return counter;

};

console.log('should be 1', makeChange(1))
console.log('should be 1', makeChange(2))
console.log('should be 3', makeChange(5))







/*
Input: Total amount
Output: Number - total numner of ways you can make that total out of change.
Constraints:
EdgeCases: both 1 and 2 return 1

Process

Should be recursive

Smallest step?

49p + (1*1)

48p + (1* 2p)
48p + (1p *2)

47 + (3 * 1p)
47 + ((2 * 2p) + (1 * 2p))

46 + (4 + 1p)
46 + (2 * 2p)

45 + (5 * 1p)
45 + (1p + (2 * 2p))
45 + 5p

44 + (6 * 1p)
44 + (1 * 1p) + 5p
44 + (3 * 2p)

43 + (7 * 1p)
43 + (2p + 5p)
43 + ((2p *3) + 1)
43 + ((1*2p) + 5p)

Process

set a counter for solutions, equal to zero

//When we have the amount,
  //add one to the solution counter.
  //call the funciton with (n-1 as the count)

//if we have more than the amount
  //call the function again with n n - 1 as the count

Otherwise,
  //for each coin size
    //call the function with n plus that number


*/


