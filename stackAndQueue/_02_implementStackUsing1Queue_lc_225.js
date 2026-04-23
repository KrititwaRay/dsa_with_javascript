class Stack {
    constructor() {
        this.q = [];
    }

    push(val) {
        this.q.push(val);
        /* 
        Time Complexity: O(1)
        */
    }

    pop() {

        let size = this.q.length;

        if (size === 0) return null;

        for (let i = 0; i < size - 1; i++) {
            this.q.push(this.q.shift())
        }

        return this.q.shift();

        /* 
        Time Complexity: O(n)
        */
    }

    top() {
        let size = this.q.length;
        if (size === 0) return null;

        for (let i = 0; i < size - 1; i++) {
            this.q.push(this.q.shift());
        }
        let ans = this.q.shift();
        this.q.push(ans);

        return ans;

        /* 
        Time Complexity: O(n)
        */
    }

    isEmpty() {
        return this.q.length === 0;
        /* 
        Time Complexity: O(1)
        */
    }
}

let stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
// console.log(stack.pop())
// console.log(stack.top())
// console.log(stack.isEmpty())

console.log("stack ", stack)


