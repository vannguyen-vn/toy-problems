const reverseString = (string) => {
  return string.split('').reverse().join('')
};

const isPalindrome = (string) => {
  string = string.toLowerCase()
  return string === reverseString(string);
}

const longestPalindrome = function (string) {
  string = string.toLowerCase();
  var palindromeList = [];
  var possiblePalindrome = ''
  for (var i = 0; i < string.length; i++) {
    var firstPointer = string[i];
    for (var j = string.length - 1; j >= 0; j--) {
      var lastPointer = string[j];
     if (firstPointer === lastPointer) {
        possiblePalindrome = string.slice(i, [j+1])
        if (isPalindrome(possiblePalindrome)) {
          palindromeList.push(possiblePalindrome)
        }
      } else if (j < i) {
        break;
      }
    }
  }
  debugger;
  var longest = possiblePalindrome[0];
  for (var k = 0; k < palindromeList.length; k++) {
    var palindrome = palindromeList[k];
    if (palindrome.length > longest.length) {
      longest = palindrome;
    }
  }
  return longest;
};