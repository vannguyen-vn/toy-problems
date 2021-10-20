/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

/*
Fn = Fn-1 + Fn-2


*/

var nthFibonacci = function (n) {
  // if (n <= 1) {
  //   return n;
  // }

  // return nthFibonacci(n - 1) + nthFibonacci(n - 2);

  var prev = 0;
  var next = 1;
  var result = 0;
  var count = 2;

  if (n === 0 || n === 1) {
    return n;
  }

  while (count <= n) {
    result = prev + next;
    prev = next;
    next = result;

    count++;
  }

  return result;
};



