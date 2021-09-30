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
  var currNode1 = list1;
  var currNode2 = list2;
  while (!(currNode2 === null && currNode1 === null)) {
    if (currNode2 === null) {
      if (currNode1.next !== null) {
        currNode2 = list2;
      }
      currNode1 = currNode1.next;
    } else if (currNode2 !== null && currNode1.value !== currNode2.value) {
      currNode2 = currNode2.next;
    } else {
      return currNode1
    }
  }
  return null;
}

