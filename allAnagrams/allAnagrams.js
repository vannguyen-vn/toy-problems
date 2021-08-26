/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  //create a return array
  let anagramList = [];

  let stringArray = string.split('')

  let backwardString = string.split('')
  backwardString = backwardString.reverse();
  backwardString = backwardString.join('');

    //separate each letter in its own variable
  let first = [stringArray[0]]
  let second = [stringArray[1]]
  let third = [stringArray[2]]

  //create a helper function that takes the array of numbers
  const swapInnerLetters = (first, second, third) => {

  //push the combination into the array with the elements in their current positon.
  let option1 = first.concat(second, third).join("")

  if (option1 === backwardString) {
    return;
  }

  let option2 = first.concat(third, second).join("")
  anagramList.push(option1, option2)

  //for each remaining letter, swap position with other remaining letter
  //push the combination into the array

  //in the array, move the first letter to the second postion and call the inner helper function with this array
  swapInnerLetters(second, first, third);
  }
  //close the inner helper function

  //for each letter, call the inner helper function
  swapInnerLetters(first, second, third);

  //return the array
  return anagramList

};

let test1 = allAnagrams('abc')
console.log('test1', test1);



/*
Input: 1 input string
Output: array of all possible annagrams of those letters
Contsraints: case does not matter, only letters
Edge: 1 letter, repeat letters

PSEUDOCODE:

//create a return array

//create a helper function that takes the array of numbers

//separate each letter in its own variable


//push the combination into the array with the elements in their current positon.

//for each remaining letter, splice the letter out and put it on the end.
//push the combination into the array

//in the array, move the first letter to the second postion and call the inner helper function with this array
//close the inner helper function

//for each letter, call the inner helper function

//return the array

SAMPLE PROCESS AND LOGIC

putting the first letter int he first position, place the second letter in the second postion and the third letter in the thrid postioin and list those. Then swap second and third lostion and list those.

123
132

Move the second letter and third letter back to their origional postions. Don't list this.
(123)

switch the positon of the first letter and the second letter and those. Switch the position of the second letter (now a) and third letter and list that.
213
231

(123)

Move the last letter to the first postion

312
321


Sample Data:


putting the first letter int he first position, place the second letter in the second postion and the third letter in the thrid postioin and list those. Then swap second and third lostion and list those.

123
132

Move the second letter and third letter back to their origional postions. Don't list this.
(123)

switch the positon of the first letter and the second letter and those. Switch the position of the second letter (now a) and third letter and list that.
213
231

(123)

Move the last letter to the first postion

312
321
--> [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
*/