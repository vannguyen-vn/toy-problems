/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function linkedListIntersection(list1, list2) {
  // list1 and list2 are nodes
  // node equality? if vals === they are the same node
  if (!list1 || !list2) { return null; }

  var currentA = list1;
  var currentB = list2;

  while(currentA || currentB) {
    currentA = !currentA ? null : currentA.next;
    currentB = !currentB ? null : currentB.next;

    if(currentA) {
      currentA.ref = currentA.ref ? currentA.ref + 1 : 1;
      if (currentA.ref === 2) { return currentA; }
    }

    if(currentB) {
      currentB.ref = currentB.ref ? currentB.ref + 1 : 1;
      if (currentB.ref === 2) { return currentB; }
    }
  }

  return null;
  // returns node
}

// module.exports = {linkedListIntersection, Node};

