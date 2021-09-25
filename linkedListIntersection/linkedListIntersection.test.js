const {linkedListIntersection, Node} = require('./linkedListIntersection.js');

const nodeA = Node('A');
nodeA.next = Node('B');
nodeA.next.next = Node('C');
const intersect = nodeA.next.next.next = Node('D');
nodeA.next.next.next.next = Node('E');
nodeA.next.next.next.next.next = Node('F');

const nodeB = Node('X');
nodeB.next = Node('Y');
nodeB.next.next = intersect;

describe('linked list intersection', () => {
  it('should exist', () => {
    expect(nodeA).toBeDefined();
  });

  it('should intersect', () => {
    const _intersect = linkedListIntersection(nodeA, nodeB);
    expect(_intersect).toBe(intersect);
  });

});