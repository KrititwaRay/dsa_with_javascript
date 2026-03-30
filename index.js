class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let head = null
head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(3)
// head.next.next.next.next.next = new ListNode(5)
// head.next.next.next.next.next.next = new ListNode(6)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    let current = head;

    while(current.next){
        if(current.val == current.next.val){
            current.next = current.next.next
        }else{
            current = current.next
            
        }
    }
    return head
    /* 
    
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    */
};

let result = deleteDuplicates(head)
console.log(JSON.stringify(result, null, 2))