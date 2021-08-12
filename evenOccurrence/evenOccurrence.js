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

// input: array
// output: number
// constraints: first item that occurs even times
let evenOccurrence = function(arr) {
  let numberOccurences = {}
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // let occurances = 0;
    // for each number
    let number = arr[i]
    // if number is not in obj
    if (numberOccurences[number] === undefined) {
      // add it as a key with a value of 1
      numberOccurences[number] = 1
    } else { // otherwise increase value by 1
      numberOccurences[number]++
    }
  }

  // loop through obj
  for (let number in numberOccurences) {
    // if value is even
    if (numberOccurences[number] % 2 === 0) {
      // return value
      return number
    }
  }

};

// examples
let onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
console.log(evenOccurrence([2, 1, 7, 8, 2, 7, 7, 7, 5])) // 2