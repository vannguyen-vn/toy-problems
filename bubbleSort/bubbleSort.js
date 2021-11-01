/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

const bubbleSort = (array) => { //[4,2,3,1], [2,4,1,3]

  //create pointer variables and hasSwapped flag
  let pointer1 = 0; //0
  let pointer2 = 1; //1
  let hasSwapped = false; //false

  //use a for loop to iterate through the array
  while (array[pointer2] !== undefined) {

    //if pointer 1 is less than pointer 2
    if (array[pointer1] > array[pointer2]) { //[2,4,1,3]
      //swap pointers (use temp variable)
      let temp = array[pointer1];
      array[pointer1] = array[pointer2];
      array[pointer2] = temp;

      //if isSwapped is false, change to true
      if (hasSwapped === false) {
        hasSwapped = true;
      }
    }

    //if at the end of the array, start over
    if (array[pointer2 + 1] === undefined) {
      //if flag hasn't been tripped, return
      if (hasSwapped === false) {
        return array;
      }

      //reassign pointers to the beginning of the array
      pointer1 = 0;
      pointer2 = 1;

      //reset flag
      hasSwapped = false;
    } else {
      //reassign pointer 1 and pointer 2 values
      pointer1 ++;
      pointer2 ++;
    }
  }
}

// console.log(bubbleSort([4, 2, 3, 1])) //==> returned [2, 1, 3, 4]
// console.log(bubbleSort([ 1, 2, 43, 100, 100, 21, 21 ])) //==> [ 1, 2, 21, 21, 43, 100, 100 ]
// console.log(bubbleSort([24.7, 24.3, 23, 9, 3, 3, 100, 25, 100])) //=> [3, 3, 9, 23, 24.3, 24.7, 25, 100, 100]
// console.log(bubbleSort([5, 4, 3, 2, 1]))//[1, 2, 3, 4, 5]



/* // second attempt
var bubbleSort = function(array) {
  if (array.length <= 1) {
    return array;
  }

  var currentIndex = 0
  var nextIndex = 1

  while (array[currentIndex] < array[nextIndex]) {
    if (array[nextIndex] === undefined) {
      return array
    }

    currentIndex = nextIndex;
    nextIndex = nextIndex++
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
      } else if (array[i] === array[j]) {
        var temp = array.splice(j, 1)
        array.splice(i, 0, temp)
      }
    }
  }

  return array
}



var test1 = bubbleSort([1, 3, 2])
var test2 = bubbleSort([2, 1, 3])
var test3 = bubbleSort([2, 3, 1])
var test4 = bubbleSort([1, 3, 2, 2])

console.log(
  test1, test2, test3, test4
)


// var bubbleSort = function(array) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length - i - 1; j++) {
//       if (array[j] < array[j+1]) {
//         var temp = array[j]
//         array[j] = array[j+1]
//         array[j+1] = temp
//       }
//     }
//   }
//   return array
// }
*/

/*
I: Array (unordered)
O: ordered array
C: values must be numbers
E: length of one, already ordered

PROCESS
For each element in the array,
  look at the next element
    If the number is greater than the current number
      create a temp variable to refer to the first value
      move the second value to the first index
      move the first value to the second index
//after looping, return the array
*/





//Old logic
// var bubbleSort = function(array) {

//   //create a "manipulation array" variable set equal to a copy of the array
//   var manipArr = array.slice();

//   //create an index 1 variable
//   index1 = 0
//   //create an index 2 variable
//   index2 = 1

//   //create a flag to tell if any variables were swapped
//   var wasSwapped = false;

//   //create an inner function that takes two elements
//   var compareValues = function(index1, index2) {


//     if (manipArr[index1] < manipArr[index2] && manipArr[index2 + 1] !== undefined) {
//       //if the value at index 1 is less than index two and the value at index2 + 2 is NOT undefined, you are in the middle of the array.

//       //increment indexes
//       index1 ++;
//       index2 ++;

//       //return a call to the inner function with the updated idexes
//       return compareValues(index1, index2);

//     } else if (manipArr[index1] < manipArr[index2] && manipArr[index2 + 1] === undefined && wasSwapped === false) {
//       //if the value at index1 is less than the value at index 2 and the value at index2 + 1 is undefined (you are at the end of the array) AND wasSwapped is false- return the manipulated array as the final array
//       return manipArr;
//     }

//     if (manipArr[index1] > manipArr[index2]) {
//       //if the value at index 1 is greater than the value at index 2
//       //create a temp var to hold the zero index value
//       var temp = manipArr[index1];
//       manipArr[index1] = manipArr[index2];
//       manipArr[index2] = temp;

//       wasSwapped = true;

//       index1 ++;
//       index2 ++;

//       if (manipArr[index2] === undefined && wasSwapped === false) {
//         //if you reach an undefined value (you are at the end of the array) and the wasSwapped flag is false, return the array as the final answer.
//         return manipArr;
//       } else if (manipArr[index2 + 1] === undefined && wasSwapped === true) {
//         //otherwise if you reach an undefined value(you are at the end of the array) and the wasSwapped flag is true, reset the indexes at the beginning of the array and return a call to the inner function with the updated array.
//         index1 = 0;
//         index2 = 1;
//         wasSwapped = false;
//         return compareValues(index1, index2)
//       } else {
//         //otherwise, you are still in the middle of an array, so return a call to the inner function with the indexes incremented as they are.
//         return compareValues(index1, index2)
//       }

//     }

//     }
//     //call the function with index 1 and index 2 to start off
//     compareValues(index1, index2);

//   return manipArr;
// };

