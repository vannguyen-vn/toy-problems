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

/*
Take two linked lists with data and pointer to the next node.
A function commonPoint(listnode*headA, listnode*headB) takes two pointers of linked list respectively and returns the value of the common or intersection point of the linked list.
An integer function that finds the length of the linked list will return the length of both linked lists from the head of the list.
Now create a pointer to the head of both lists and traverse the list which is greater in its length till (length of first list – length of second list).
Now traverse the list till we find the next pointer is equal.
Return the value of that particular node where both the lists intersect.
*/

function linkedListIntersection(list1, list2) {
  //get the size of the first linked list
  var list1size = linkedListLength(list1)
  //get the size of the second linked list
  var list2size = linkedListLength(list2)

  //create a node set to the value of the head node of list1
  var pointer1 = new Node(list1.head)
  //create a node set to the value of the head node of list2
  var pointer2 = new Node(list2.head)

  for (var i = )

  //if the size of the first list is greater than the size of the second list
  if (list1size > list2size) {
    for (var i = 0; i < pointer1; i++) {
      var
    }

  } else {

    for (var i = 0; i < pointer2; i++) {
      var 
    }

  }


    //increment the position of the first node
    pointer1 = pointer1.next

    //if the size of the seocnd list is greater than the length of the first list
    pointer2 = pointer2.next
    //increment the position of the second node

}

function linkedListLength = (linkedList) {
  //create a counter
  let size = 0
  //traverse the list one node at a time until next is eqaul to null
  while (linkedList.next !== null) {
    //increment the counter
    linkedList = linkedList.next
    size ++
  }

  return size;
}

