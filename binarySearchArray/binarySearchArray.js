/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {

    //if the value is more than the value at the end of the index or less than the value at the beginning of the index
    //return null

  if (array[0] > target || array[array.length -1] < target) {
    return null;
  }

  //find the midpoint of the array, if there is an even number, round the index down
  let midpoint = Math.floor((array.length - 1) / 2)
  //create a start variable assigned to the index at the first postion
  let start = array[0]
  //create an end variable assigned to the index at the last postion
  let end = array[array.length - 1]

  const innerCompare = function() {
  //if the index value is greater than the value at the midpoint
  if (array[midpoint] > target) {
    //set the end value to the midpoint minus one
    midpoint -=1;
    return innerCompare()
  }

  //if the index value is less than the value at the midpoint
  if (array[midpoint] < target) {
    //set the start at the midpoint plus one
    midpoint += 1;
    return innerCompare()
  }

    //if the midpoint value is equal to the input value
    if (array[midpoint] === target) {
      //return the index of the midpoint value
      return;
    }
  }

  innerCompare()

  return midpoint;

};

console.log('should be null', binarySearch([1, 2, 3, 4, 5], 0))
console.log('should be 0', binarySearch([1, 2, 3, 4, 5], 1))
console.log('should be 1', binarySearch([1, 2, 3, 4, 5], 2))
console.log('should be 2', binarySearch([1, 2, 3, 4, 5], 3))
console.log('should be 3', binarySearch([1, 2, 3, 4, 5], 4))
console.log('should be 4', binarySearch([1, 2, 3, 4, 5], 5))
console.log('should be null', binarySearch([1, 2, 3, 4, 5], 8))


/*
I: 1 sorted array, element
O: index of the element
C: must be numbers
E: value is not in the array

PROCESS:

//set a pointer in the middle of the array
  //if the value is greater than the value at that index, search to the right of the index
  //if the value is less than the value at the index, search to the left of the index
  //if the value equal to the value at the index, return the current index


//PSEUDOCODE

  //if the value is more than the value at the end of the index or less than the value at the beginning of the index
    //return null

  //find the midpoint of the array, if there is an even number, round the index down
  //create a start variable assigned to the index at the first postion
  //create an end variable assigned to the index at the last postion

  //if the index value is greater than the value at the midpoint
    //set the start to the midpoint plus one


  //if the index value is less than the value at the midpoint
    //set the end value to the midpoint minus one

  //if the midpoint value is equal to the input value
    //return the index of the midpoint value

  //return a call to the function


  SAMPLE DATA:
  [1, 2, 3, 4, 5], 4

  start 0
  end 4
  midpoint 2

  midpoint val 3
  3 < 4

  start index = 3
  end index 4
  midpoint = 3.5 - rounds down to 3
  mindpoint val = 4
  4=4
  return index 3 (value 4)

*/