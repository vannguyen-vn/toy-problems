/*
 * Find the first item that occurs an even number of times in an array.
<<<<<<< HEAD
 * Remember to handle multiple even-occurrence items and return the first one.
=======
 * Remember to handle multiple even-occurrence items and return the first one. 
>>>>>>> 6e1323bdff6d323af09becd959c4904d3ebee8fc
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

<<<<<<< HEAD
// input: array
// output: number
// constraints: first item that occurs even times
var evenOccurrence = function(arr) {
  var numberOccurences = {}
  // loop through array
  for (var i = 0; i < arr.length; i++) {
    // for each number
    var number = arr[i]
    // if number is not in obj
    if (numberOccurences[number] === undefined) {
      // add it as a key with a value of 1
      numberOccurences[number] = 1
    } else { // otherwise increase value by 1
      numberOccurences[number]++
    }
  }

  // loop through obj
  for (var number in numberOccurences) {
    // if value is even
    if (numberOccurences[number] % 2 === 0) {
      // return value
      return number
    }
  }

};

// examples
var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
console.log(evenOccurrence([2, 1, 7, 8, 2, 7, 7, 7, 5])) // 2
=======
var evenOccurrence = function(arr) {
  // Your code here.
};
>>>>>>> 6e1323bdff6d323af09becd959c4904d3ebee8fc
