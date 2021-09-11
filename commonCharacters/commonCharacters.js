/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  const commonCharacters = new Set()

  //iterate over string one. for each letter
    //iterate over the second string
    //if the letter can be found in the second string, add it to the set. Break the loop
  for (var i = 0; i < string1.length; i++) {
    for (var j=0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        commonCharacters.add(string1[i])
        break;
      }
    }
  }

  let resultString = '';

  for (let character of commonCharacters) resultString += character

//return the set
return resultString;
};

console.log('should be aeiou', commonCharacters('acexivou', 'aegihobu'))

/*
I: Two strings
O: one string that contains the strings found in both characters, in the order they appeared in string a
C: No spaces, No duplicates
E: N/A

//Process - Iterate through every character in string 1, and if it's not a space then add it to the collection

//create a new new set

//iterate over string one. for each letter
  //iterate over the second string
    //if the letter can be found in the second string, add it to the set

//return the set
*/