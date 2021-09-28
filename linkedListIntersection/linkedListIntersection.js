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
  if (list1 === null || list2 === null) return null;
  //traverse the linked list until
  //while pointers are not equal to each other, if  pointer1s value is null (!value), then pointer1 points at
  //if either reaches null, return null
  let pointer1 = list1;
  let pointer2 = list2;
  //if pointer1 and pointer2 are the same value, could be a value or they could both null where they would also be equal, so would return null or the value
  while (pointer1 !== pointer2) {
   pointer1 = pointer1.next;
   pointer2 = pointer2.next;
   //changes position one by one until pointer1 === pointer 2
   //if a pointer reaches null, make it point to the other lists head
   if (pointer1 === pointer2) {
     return pointer 1;
   }
   if (pointer1 === null) {
     pointer1 = list2;
   }
   if (pointer2 === null) {
     pointer2 = list1;
   }
  }
  return pointer1;
}

