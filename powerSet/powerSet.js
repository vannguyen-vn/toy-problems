/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {


//if the input is an empty string,return an empty string
if (str === "") {
  return [""];
}

//create a results array
let combinations = [];

//create an inner helper function that takes in the array of letters
let innerHelperFunction = (array) => {

//if there are no letters,
  //return;
if (array.length === 0) {
  return;
}

var i = 0;
//set one pointer at the first letter. Push this letter into the results array.
combinations.push(array[i])


//if there are more elements in the array
  //create a another pointer and for each subsequent letter, create a new combination and push to the array
if (array[i+1]) {
  for (var j = i+1; j < array.length; j++) {
    combinations.push(array[i]+array[j])
  }
}

//if the number of pointers eqals the length of the array,
  //push the combination of four into the
  //call to the function with an array that starts at the current second element (slice(1))
 }

 //call the inner helper function with an array where each letter from the string is a separate element
 innerHelperFunction(str.split(""))

  //return the return array
  return combinations;

};



/*
Input: string
Output:
Constraints: only lowercase leteters, order does not matter.
Edge Cases: Empty string


 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 *
 * [" a ab, ac, acb, b, bc, c]

Process

//if it's a string, just return a string

//separate each letter into list items

//Starting with the first letter, find all combinations with one letter

//Staying with the first letter, find all comninations with two letters, starting with the second letter and moving down the line

//Staying with the first letter, find all combinations with three letters, starting with the second-to-last letter and then going for the left and the right sides, respectively.

//Staying with the fourth letter, find all combinations with four letters. Starting with the last letter and moving backwards toward the first letter.


//PseudoCode

//if the input is an empty string,return an empty string

//create a copy of the array

//create a results array

//create a list, where each letter from the string is a separate element

//create an inner helper function that takes in the array of letters

//if there are no letters,
  //return;

//set one pointer at the first letter. Push this letter into the results array.

//if there are more elements in the array
  //create a another pointer and for each subsequent letter, create a new combination and push to the array

//if the number of pointers eqals the length of the array,
  //push the combination of four into the
  //call to the function with an array that starts at the current second element (slice(1))

//return the return array

*/