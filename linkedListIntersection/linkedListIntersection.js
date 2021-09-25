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
  var listOneNode = list1.head;
  var intersection = null;
  var checkNode = (listOneNode) => {
    var listTwoNode = list2.head;
    while (listTwoNode) {
      if (listOneNode === listTwoNode) {
        intersection = listOneNode;
        return listOneNode;
      }
      listTwoNode = listTwoNode.next;
    }
  }
  while(listOneNode) {
    checkNode(listOneNode);
    listOneNode = listOneNode.next;
    if (intersection) {
      break;
    }
  }
  return intersection;
  // TODO: Implement this function!
}

