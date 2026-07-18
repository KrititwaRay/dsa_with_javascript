/* Optimized Singly Linked List */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /*
        addToHead(val)
        Time Complexity: O(1)
        Space Complexity: O(1)
    */
    addToHead(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    /*
        addToTail(val)
        Time Complexity: O(1)
        Space Complexity: O(1)
    */
    addToTail(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    /*
        removeHead()
        Time Complexity: O(1)
        Space Complexity: O(1)
    */
    removeHead() {
        if (!this.head) return null;

        const removedNode = this.head;

        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.size--;

        return removedNode.val;
    }

    /*
        removeTail()
        Time Complexity: O(n)
        Space Complexity: O(1)
    */
    removeTail() {
        if (!this.head) return null;

        // Single node case
        if (this.head === this.tail) {
            const removedNode = this.head;

            this.head = null;
            this.tail = null;
            this.size--;

            return removedNode.val;
        }

        let current = this.head;

        while (current.next !== this.tail) {
            current = current.next;
        }

        const removedNode = this.tail;

        current.next = null;
        this.tail = current;

        this.size--;

        return removedNode.val;
    }

    /*
        print()
        Time Complexity: O(n)
        Space Complexity: O(n) (for result array)
    */
    print() {
        let current = this.head;
        const result = [];

        while (current) {
            result.push(current.val);
            current = current.next;
        }

        console.log(result.join(" -> ") + " -> null");
    }
}


// ======================
// Example Usage
// ======================

const list = new LinkedList();

list.addToHead(20);
list.addToHead(10);

list.addToTail(555);
list.addToTail(300);
list.addToTail(400);

list.print();
// 10 -> 20 -> 555 -> 300 -> 400 -> null

console.log("Removed Head:", list.removeHead());
// 10

console.log("Removed Tail:", list.removeTail());
// 400

list.print();
// 20 -> 555 -> 300 -> null

console.log("Size:", list.size);
// 3

console.log(JSON.stringify(list, null, 2));