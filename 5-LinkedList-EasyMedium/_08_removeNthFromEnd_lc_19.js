/* 19. Remove Nth Node From End of List */

/* 
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Two Pass
var removeNthFromEnd_1 = function (head, n) {

    let sentinalNode = new ListNode(0);
    sentinalNode.next = head
   
    let length = 0;
    // Find Length
    while (head) {
        length++
        head = head.next
    }
    
    // previous positionof delete node
    let previousPosition = length - n;

    let previosu = sentinalNode;

    for(let i = 0; i < previousPosition; i++){
        previosu = previosu.next
    }
    
    previosu.next =  previosu.next.next

    return sentinalNode.next;
    /* 
        Time Complexity: O(n + n) -> O(2n) -< O(n)
        Space Complexity: O(1)
    */
};




// One Pass
let removeNthFromEnd_2 = function (head, n){
    let sentinalNode = new ListNode(0);
    sentinalNode.next = head;

    let firstPointer = sentinalNode;
   

    // Move first pointer ahed by n
    for (let i = 0; i < n; i++) {
        firstPointer = firstPointer.next
    }

     let secondPointer = sentinalNode;
    // move both pointer until first pointer reaches last node

    while(firstPointer.next){
        secondPointer = secondPointer.next
        firstPointer = firstPointer.next
    }
    //delete 
    secondPointer.next = secondPointer.next.next

    return sentinalNode.next;


    /* 
    
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    */


}

