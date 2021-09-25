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

function getListLength(list) {
  if (list.next === null) {
    return 1;
  } else {
    return getListLength(list.next) + 1;
  }
}

function linkedListIntersection(list1, list2) {
  var listOneLength = getListLength(list1);
  var listTwoLength = getListLength(list2);

  var diff = Math.abs(listTwoLength - listOneLength);
  var longerNode = listOneLength >= listTwoLength ? list1 : list2;
  var shorterNode = listOneLength >= listTwoLength ? list2 : list1;

  while (longerNode && shorterNode) {
    if (diff > 0) {
      longerNode = longerNode.next;
      diff--;
      continue;
    }

    if (longerNode === shorterNode) {
      return longerNode
    }

    longerNode = longerNode.next;
    shorterNode = shorterNode.next;
  }

  return null;
}

