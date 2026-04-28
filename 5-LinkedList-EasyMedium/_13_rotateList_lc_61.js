/* 61. Rotate List */

/* 
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
nput: head = [0,1,2], k = 4
Output: [2,0,1]


Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 10^9



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
 * @param {number} k
 * @return {ListNode}
 */

class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}

let head = new ListNode(1)
 head.next = new ListNode(2)
 head.next.next = new ListNode(3)
 head.next.next.next = new ListNode(4)
 head.next.next.next.next = new ListNode(5)

var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

    let length = 0;
    let current = head

    while(current){
        current = current.next
        length++
    }

    k = k % length;

    let slow = head
    let fast = head

    

    for (let i = 0; i < k; i++) {
        fast = fast.next
    }

   while(fast.next){
    slow = slow.next
    fast = fast.next
   }
   fast.next = head;
   let newHead = slow.next;
   slow.next = null;

   return newHead


   /* 
   Time Complexity: O(n)
   Space Complexity: O(1)
   
   */

    
};
let result = rotateRight(head, 3);
console.log(JSON.stringify(result, null, 2))