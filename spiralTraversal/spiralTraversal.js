/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  let result = matrix.shift();
  matrix.forEach((array) => {
    const lastElem = array.pop();
    if (lastElem) result.push(lastElem);
  })
  const lastArray = matrix.pop();
  if (lastArray) {
    for (let i = 0; i < lastArray.length; i++) {
      const lastElem = lastArray.pop();
      result.push(lastElem);
      i--;
    }
  }
  for (let i = matrix.length - 1; i >= 0; i--) {
    const firstElem = matrix[i].shift();
    if (firstElem) result.push(firstElem);
  }
  result = result ? result.concat(spiralTraversal(matrix)) : []
  return result;
};