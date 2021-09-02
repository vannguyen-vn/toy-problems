var Tree = require('./treeCountLeaves.js');
test('it should count all the leaves in a tree', () => {
  var root = new Tree();
  expect(root.countLeaves()).toEqual(1); // 1
  root.addChild(new Tree());
  expect(root.countLeaves()).toEqual(1); // still 1
  root.addChild(new Tree());
  root.children[0].addChild(new Tree());
  root.children[0].addChild(new Tree());
  root.children[0].children[0].addChild(new Tree());
  expect(root.countLeaves()).toEqual(3); // 3

})