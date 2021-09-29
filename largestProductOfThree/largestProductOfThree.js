/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  const dfs = function (array, start, current_value, depth) {
    if (depth === 3) {
      return current_value;
    }
    if (start >= array.length) {
      return -1;
    }
    var curMax = Number.NEGATIVE_INFINITY;
    for (var i=start; i<array.length; i++) {
      curMax = Math.max(curMax, dfs(array, i+1, current_value*array[i], depth+1));
    }
    return curMax;
  };
  return dfs(array, 0, 1, 0);
};