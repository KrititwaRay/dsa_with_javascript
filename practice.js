class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


let head = null
head = new Node(10)
head.next = new Node(12)
head.next.next = new Node(13)
head.next.next.next = new Node(14)
head.next.next.next.next = new Node(15)
head.next.next.next.next.next = new Node(16)


function removeNthFromLast(head, position) {
    if (!head) return null;

    let sentinalNode = new Node(0);
    sentinalNode.next = head;

    let length = 0;

    while (head) {
        length++
        head = head.next;
    }

    let deletePos = length - position;

    let previosuNode = sentinalNode;

    for(let i = 0; i <  deletePos; i++){
        previosuNode = previosuNode.next
    }
    previosuNode.next = previosuNode.next.next
    
    return sentinalNode.next

    // time complexity  = O(m) + O(n)  -> O(m)
    // spcae complexity  = O(1)

}

let result = removeNthFromLast(head, 1);
console.log(JSON.stringify(result, null, 2));