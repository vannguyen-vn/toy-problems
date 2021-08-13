/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var countOfElements = {};
  for (var i = 0; i < arr.length; i++) {
    if (countOfElements[arr[i]] === undefined) {
      countOfElements[arr[i]] = 0;
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) { countOfElements[arr[i]]++; }
      }
      if (countOfElements[arr[i]] % 2 === 0) {
        return arr[i];
      }
    }
  }
  return null;
};

// var evenOccurrence = function(arr) {
//   var oddTimes = [];
//   for (var x of arr) {
//     var count = 0;
//     var index = 0;
//     if (oddTimes.indexOf(x) > -1 ) {
//       continue;
//     }
//     while (index < arr.length && index > -1) {
//       if (arr.indexOf(x, index) === -1) {
//         break;
//       } else {
//         count++;
//         index = arr.indexOf(x, index) + 1;
//       }
//     }
//     if (count % 2 === 0) {
//       return x;
//     } else {
//       oddTimes.push(x);
//     }
//   }
//   return null;
// };