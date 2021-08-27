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

  var combo = 1;

  var innerFunction = (input) => {

    if (input - 2 >= 0) {
        combo++;
        innerFunction(input - 2);
    }
    if (input - 5 >= 0) {
        combo++;
        innerFunction(input - 5);
    }
    if (input - 10 >= 0) {
        combo++;
        innerFunction(input - 10);
    }
    if (input - 20 >= 0) {
        combo++;
        innerFunction(input - 20);
    }
    if (input - 50 >= 0) {
        combo++;
        innerFunction(input - 50);
    }
    if (input - 100 >= 0) {
        combo++;
        innerFunction(input - 100);
    }
    if (input - 200 >= 0) {
        combo++;
        innerFunction(input - 200);
    }
  };

  innerFunction(total);


  return combo;
};
