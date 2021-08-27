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
  var combos = [];
  var recursiveFunction = (change, combo) => {
    if (change === total) {
      combos.push(combo);
      return;
    }
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    coins.forEach(coin => {
      if (change + coin <= total) {
        recursiveFunction(change + coin, combo + coin);
      }
    })
  }
  recursiveFunction(0, '');

  var sortedCombos = [];
  var sortedcombosCounts = {};
  combos.forEach(combo => {
    var sortedArray = combo.split('');
    sortedArray = sortedArray.sort();
    sortedCombos.push(sortedArray.join(''));
  })
  sortedCombos.forEach(combo => {
    if (!sortedcombosCounts[combo]) { sortedcombosCounts[combo] = 0; }
    sortedcombosCounts[combo]++;
  })
  sortedCombos.forEach((combo, i) => {
    if (sortedcombosCounts[combo] > 1) {
      sortedCombos.splice(i, 1);
      sortedcombosCounts[combo]--;
    }
  })
  return sortedCombos.length;
};

console.log(makeChange(4))


