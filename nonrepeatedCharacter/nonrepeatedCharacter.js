/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
};


/*
Input: string
Output: 1 string character
Constraints: must be first non-repeated character, must be a string. You must go to the end of the string in order to tell if a character is repeated
Edge Cases: empty string, first character is non-repeated (index 0)

//Process:
  //Create an object, where the key will be the character and the value will be an array of indexes.

  //for each character in the string
    //if there is a key, add current index to the array
  //if there is not a key,
    //create a property for the index and create an array with the current index as its value

  //After the loop finishes,
  //create a lowest index tracker, set at null
    //loop through all of the value properties
    //If you encounter index 0, **return** the key at that position
    //If a value is equal to or less than the current lowest index, set the lowest tracker to that index

  //at the end, **return** the value at the index in the string

*/
