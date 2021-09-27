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

function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}
function getLinkedListLength(listNode) {
  if (listNode.next === null) return 1;
  else return getLinkedListLength(listNode.next) + 1;
}

function linkedListIntersection(list1, list2) {

  const list1Length = getLinkedListLength(list1);
  const list2Length = getLinkedListLength(list2);

  let difference = Math.abs(list2Length - list1Length);
  let long = list1Length >= list2Length ? list1 : list2;
  let short = list1Length >= list2Length ? list2 : list1;

  while(long && short) {

    if(difference > 0) {
      long = long.next;
      difference--;
      continue;
    }

    if(long === short) return long;

    long = long.next;
    short = short.next;
  }

  return null;
}