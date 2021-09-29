/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  //find the largest three numbers
    //find one largest
    //search splice to find next largest
    //search new splice to find third largest
  //multiply them together

  var firstLargest, secondLargest, thirdLargest;
  var product = 1;

  var findLargest = function(array) {
    var largest = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  }

  firstLargest = findLargest(array);
  array.splice(array.indexOf(firstLargest), 1);
  secondLargest = findLargest(array);
  array.splice(array.indexOf(secondLargest), 1);
  thirdLargest = findLargest(array);

  return firstLargest * secondLargest * thirdLargest;

};
