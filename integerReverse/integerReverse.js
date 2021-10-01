/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

// input: number
// output: number (reverse order)
// constraints: DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY
// edge cases: if one digit return itself?
function reverseInteger(number){
  var rebmun = 0
  var digit = 0
  var currentNum = number % 10
  var previousNum = (number - currentNum) / 10

  while (Math.pow(10, digit) <= number) {
    digit++
  }

  while (digit) {
    digit--
    rebmun += currentNum * Math.pow(10, digit)
    currentNum = previousNum % 10
    previousNum = (previousNum - currentNum) / 10
  }

  return rebmun
}

// example:
console.log(reverseInteger(54)) // 45
console.log(reverseInteger(543)) // 345
console.log(reverseInteger(5)) // 5


// function reverseInteger(number){
//   var rebmun = ''

//   // base case one digit
//   if (number < 10) {
//     return number
//   }

//   var currentNum = number % 10
//   var nextNum = (number - currentNum) / 10
//     // use remainder 10 to find the last number
//    rebmun += currentNum + '' + reverseInteger(nextNum)

//   return Number(rebmun)
// }