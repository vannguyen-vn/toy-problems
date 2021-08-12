/*
 * Find the first item that occurs an even number of times in an array.
<<<<<<< HEAD
 * Remember to handle multiple even-occurrence items and return the first one.
=======
 * Remember to handle multiple even-occurrence items and return the first one. 
>>>>>>> 33748c3d10eef3c191638bc9529b73e0c2038935
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

<<<<<<< HEAD
// iterate over the array and add each number to an object with a value of how many times it has occured

// check the object for all of the numbers that have even values

// find the index of each of those numbers in the main array

// return the number with the smallest inde

var evenOccurrence = function(arr) {
  var holder = {};
  var holderArr = [];
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (holder[num] === undefined) {
      holder[num] = 1;
    } else {
      holder[num]++
    }
  }
  for (var key in holder) {
    if (holder[key] % 2 === 0) {
      holderArr.push(Number(key))
    }
  }
  var smallestIndex = holderArr[0]
  for (var i = 0; i < holderArr.length; i++) {
    if (arr.indexOf(holderArr[i]) < arr.indexOf(smallestIndex)) {
      smallestIndex = holderArr[i];
    }
  }
  return smallestIndex
=======
var evenOccurrence = function(arr) {
  // Your code here.
>>>>>>> 33748c3d10eef3c191638bc9529b73e0c2038935
};
