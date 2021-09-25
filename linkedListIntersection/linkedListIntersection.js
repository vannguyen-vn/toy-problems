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
  // TODO: Implement this function!
  if (list1.head === undefined || list2.head === undefined || list1.head === null || list2.head === null) {
    return null;
  } else if (list1.head.next === null || list2.head.next === null) {
    return null;
  }

  var canStillSearchList1 = true;
  var currentNodeList1 = list1.head;
  var currentNextList1 = currentNodeList1.next;

  while (canStillSearchList1) {

    var canStillSearchList2 = true;
    var currentNodeList2 = list2.head;
    var currentNextList2 = currentNodeList2.next;

    while (canStillSearchList2) {
      if (currentNextList1.val === currentNextList2.val) {
        return currentNextList1;
      }
      currentNodeList2 = currentNodeList2.next;
      currentNextList2 = currentNodeList2.next;
      canStillSearchList2 = currentNextList2 === null ? false : true;
    }

    currentNodeList1 = currentNodeList1.next;
    currentNextList1 = currentNodeList1.next;
    canStillSearchList1 = currentNextList1 === null ? false : true;
  }

  return null;
}

