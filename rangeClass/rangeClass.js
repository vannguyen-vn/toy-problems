/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */


var Range = function(start, end, step) {
  this.start = start;
  this.end = end || null;
  this.step = step || 1;
};

Range.prototype.size = function () {
  if (this.step > 0) {
    return (this.end - this.start) + 1
  } else if (this.step < 0) {
    return (this.start - this.end) - 1
  } else {
    return 0;
  }
};

Range.prototype.each = function (callback, currentIndex) {

  currentIndex = currentIndex || this.start;

    if (currentIndex > this.end) {
      return [];
    }

    var result = callback(currentIndex);
    var nextIndex = this._calculateNext(currentIndex);

    return [result].concat(this.each(nextIndex));

};

Range.prototype.includes = function (value) {
  if (this.end === null) {
    if (value === this.start) {
      return true;
    } else {
      return false;
    }
  }
  return (value % this.step === 0 && value >= this.start && value <= this.end)
};

Range.prototype._calculateNext = function(currentIndex) {
  if (this.step === 0) {return 0}
  if (this.step > 0) {return currentIndex += this.step;}
  if (this.step < 0) {return currentIndex -= this.step;}
}

var range = new Range(1);

//WHITEBOARD: https://excalidraw.com/#json=5043386759249920,ZsIDVi2fU5YbdVNWoy5KOQ


var justOne = new Range(1);
console.log('should be true', justOne.includes(1))
console.log('should be false', justOne.includes(50))
var threes = new Range(3, 100, 3);
console.log('should be true', threes.includes(3))

  console.log('should be false', threes.includes(4))

  console.log('should be true', threes.includes(33))

  console.log('should be true', threes.includes(99))




// function () {

//   var justOne = new Range(1);

//   justOne.includes(1).should.eql(true);

//   justOne.includes(50).should.eql(false);

//   var threes = new Range(3, 100, 3);

//   threes.includes(3).should.eql(true);

//   threes.includes(4).should.eql(false);

//   threes.includes(33).should.eql(true);

//   threes.includes(99).should.eql(true);

// }