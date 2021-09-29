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

let getLength = function (list) {
  let list_length = 0;
  while (list) {
    list = list.next;
    list_length ++;
  }

  return list_length;
}

function linkedListIntersection(list1, list2) {
  let list1_length = getLength(list1);
  let list2_length = getLength(list2);

  let difference = Math.abs(list1_length - list2_length);

  let long = list1_length >= list2_length ? list1 : list2;
  let short = list1_length >= list2_length ? list2 : list1;

  while(short && long) {
    if (difference > 0) {
      long = long.next;
      difference--;
      continue;
    }
    if (long === short) {
      return long;
    }

    long = long.next;
    short = short.next;
  }

  return null;
}

