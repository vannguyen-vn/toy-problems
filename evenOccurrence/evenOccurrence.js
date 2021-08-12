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
  // create an empty array
  var presentNums = [];
  // create an empty object
  var duplicateNums = {};

  // iterate over the input arr
  for (var num of arr){
    // if the array contains the current number
    if (arr.includes(num)) {
      // if the object contains the number as a key
      if (duplicateNums.hasOwnProperty(num)) {
        // increase the value by one
        duplicateNums[num] = duplicateNums[num] + 1;
      // else
      } else {
        // add the number as a key with value of 2
        duplicateNums[num] = 2;
      }
    } else {
    // else
      // add it to the empty array
      presentNums.push(num);
    }
  }

  // create another empty object

  //iterate over the object with number and occurence keys and values
    // if occurence is and an even number
      // add that key/value pair to the empty object

  // find the indexOf each key in the original array and return the key with the smallest index
};
