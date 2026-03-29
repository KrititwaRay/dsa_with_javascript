class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let head = null
head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(5)
head.next.next.next.next.next.next = new ListNode(6)




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

let result_1 = removeNthFromEnd_1(head, 2)
// console.log(JSON.stringify(result_1, null, 2))