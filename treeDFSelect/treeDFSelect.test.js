const Tree = require('./treeDFSelect.js');

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
console.log(root1)
root1.DFSelect(function (value, depth) {
  return value % 2;
})
//  [1, 5, 3, 7]

root1.DFSelect(function (value, depth) {
  return depth === 1;
})
 [2, 3]
test('it should evaluate by value searching the extent of each branch before back tracking.', () => {
  expect(root1.DFSelect(function (value, depth) {
    return value % 2;
  })).toEqual([1, 5, 3, 7])
})
test('it should evaluate by depth searching the extent of each branch before back tracking', () => {
  expect(root1.DFSelect(function (value, depth) {
    return depth === 1;
  })).toEqual([2, 3])
})