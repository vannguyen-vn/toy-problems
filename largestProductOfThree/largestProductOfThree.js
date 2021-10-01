/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  let result = null;
    for (var i = 0; i < array.length; i++) {
        for (var j = i+1; j < array.length; j++) {
            for (var k = j+1; k < array.length; k++) {
                let temp = array[i] * array[j] * array[k];
                if (result === null) {
                    result = temp;
                } else {
                    if (temp > result) {
                        result = temp;
                    }
                }
            }
        }
    }
    return result;
};
