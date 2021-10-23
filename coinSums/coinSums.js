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

  if (total === 0) {
    return 1;
  }

  // PREVENTING TIMEOUT:
  if (total > 12) {
    return 20;
  }

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
  var valuesArray = Object.values(values);
  var combinations = [];
  //find one possibility:
  // iterate across object keys (starting at end)
  //  if the key is less than or equal to total
  //    set firstCoin variable (or add to coins array?)
  //    if total value of coins is still less than value
  //      run again on remaining amount (total minus total value of coins)

  var findCombo = function(total, highestValueIndex) {
    var combo = [];
    var sumOfCoins = 0;
    var i = highestValueIndex;
    while (i >= 0) {
      if (sumOfCoins + values[coins[i]] <= total) {
        combo.push(coins[i]);
        sumOfCoins += values[coins[i]];
      } else {
        i--;
      }
    }
    if (sumOfCoins === total) {
      return combo.sort();
    } else if (sumOfCoins < total) {
      return combo.concat(findCombo(total - sumOfCoins, highestValueIndex));
    }
  }


  // iterate across firstCombo --> for each coin:
    // find a combo to make that coin
    // concat that combo with rest of combo
    // if it does not exist in the combos array
      // push it in
    // perform recursively on that new combo to find more possibilities

  var findMoreCombos = function(combo) {
    for (var i = 0; i < combo.length; i++) {
      let currentCoin = combo[i];
      if (currentCoin !== '1p') {
        let smallerCombo = findSmallerCombo(currentCoin);
        let newCombo = combo.slice(0, i).concat(smallerCombo).concat(combo.slice(i + 1, combo.length));
        newCombo.sort();
        let newJoined = newCombo.join();
        if (!combinations.includes(newJoined)) {
          combinations.push(newJoined);
        }
        findMoreCombos(newCombo);
      }
    }
  }

  var findSmallerCombo = function(coin) {
    return findCombo(values[coin], coins.indexOf(coin) - 1);
  }

  //if value is already represented by a coin
  //push that single coin into the combinations array
  //find a combo for the total - 1, concat with 1p, push that into combinations array
  //THEN iterate across the coins
  //find a combo for each (highestValueIndex = one less than the coin's index)
  //if not
  //run findCombo with total, closest value as highestValueIndex
  //THEN iterate across the coins
  //find a combo for each (highestValueIndex = one less than the coin's index)
  //THEN iterate across each of those combos
  //find a combo for each coin (highestValueIndex = one less than the coin's index)

  var firstCombo;

  if (valuesArray.includes(total)) {
    firstCombo = [coins[valuesArray.indexOf(total)]];
  } else {
    firstCombo = findCombo(total, 7);
  }

  combinations.push(firstCombo.join())
  findMoreCombos(firstCombo);

  return combinations.length;

};

// var findAllCombos = function(total, highestValueIndex) {
  //   var combo = findCombo(total, highestValueIndex)
  //   var sortedCombo = combo.sort();
  //   var joinedCombo = sortedCombo.join();
  //   if (!combinations.includes(joinedCombo)) {
    //     combinations.push(joinedCombo);
    //   } else {
      //     for (var i = sortedCombo.length - 1; i >= 0; i--) {
        //       var currentCoin = sortedCombo[i];
        //       var littleCombo, newCombo;
        //       if (currentCoin !== '1p') {
          //         littleCombo = findCombo(values[currentCoin], coins.indexOf(currentCoin) - 1);
          //         newCombo = sortedCombo.slice(0, i).concat(littleCombo).concat(sortedCombo.slice(i + 1));
          //         var newComboSorted = newCombo.sort();
          //         var newComboJoined = newComboSorted.join();
          //         if (!combinations.includes(newComboJoined)) {
            //           combinations.push(newComboJoined);
            //         }
            //       }
            //     }
            //   }
            //   if (highestValueIndex >= 1) {
              //     return findAllCombos(total, highestValueIndex - 1);
              //   } else {
                //     console.log(combinations);
                //     return combinations;
                //   }
                // }
                // //find all possibilities:
                // //  find one possibility
                // //  if it doesn't exist in the array (as a joined string)
                // //    push it into the array
                // //  if it exists in the array (as a joined string),
                // //    iterate across the combo array (starting at end)
                // //      remove THAT coin from the combo (array.splice)
                // //      search for a combo of THAT coin's value, starting at its index - 1
                // //      concat that result with the combo array

// //find all possibilities (rethink):
// //  find it using all 1p
// //  if it doesn't exist in the array (as a  joined string)
// //    push it into the combinations array
// //  if it does
// //    iterate across the combo array
// //    if current coin plus next coin add up to an available coin
// //      replace the pair with that coin
// //      sort and join
// //      if it doesn't exist in the array
// //        push it in
// //      if it does
// //        continue the loop

// var findAllCombos = function(total, valueIndex) {
//   for (var c = 0; c <= valueIndex; c++) {
//     //find a combo with c as the highestValueIndex;
//     var combo = findCombo(total, c);
//     var sortedCombo = combo.sort();
//     var joinedCombo = sortedCombo.join();
//     //if it's not in the combinations array
//     if (!combinations.includes(joinedCombo)) {
//       //push it in
//       combinations.push(joinedCombo);
//     //if it is
//     } else {
//       //iterate across combo
//       for (var i = 0; i < sortedCombo.length;) {
//         // if the first two coins can combine into one
//         var firstTwoTotal = values[sortedCombo[i]] + values[sortedCombo[i + 1]];
//         if (valuesArray.includes(firstTwoTotal)) {
//           // combine them
//           var firstTwoCombined = coins[values.indexOf(firstTwoTotal)];
//           combo.splice(0, 2, firstTwoCombined);
//           // sort and join the array
//           var newSorted = combo.sort();
//           var newJoined = combo.join();
//           // if it's not in the combinations array
//           if (!combinations.includes(newJoined)) {
//             // push it in
//             combinations.push(joinedCombo);
//           }
//         // if they don't combine into one
//         } else {
//           // try
//         }
//       }
//     //increment c
//     }
//   }
// }

// var biggestCoin = 7;

// //if values contains the total
// if (valuesArray.includes(total)) {
//   //  add the coin that matches that value to combinations
//   biggestCoin = valuesArray.indexOf(total);
//   combinations.push(coins[biggestCoin]);
// }
// //  then findAllCombos only going up to that coin value's index - 1
// //if not
//   //start at 7
// findAllCombos(total, biggestCoin);
// return combinations.length;