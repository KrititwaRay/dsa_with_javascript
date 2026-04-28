/* 155. Min Stack */
 


/* 

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

1. MinStack() initializes the stack object.
2. void push(int val) pushes the element val onto the stack.
3. void pop() removes the element on the top of the stack.
4. int top() gets the top element of the stack.
5. int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.


Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


Constraints:

-2^31 <= val <= 2^31 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.

*/

var MinStack = function() {
    this.stack = [];
};


/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    if(this.stack.length === 0  ){
        this.stack.push([val, val])
    }else{

        // Math.min(last min, current value)
        let lastMinVal = this.stack[this.stack.length - 1][1];
        let minVal = Math.min(val, lastMinVal)
        this.stack.push([val, minVal])
    }
    /* 
    Time Complexity: O(1)
    */
    
};



/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();

    /* 
     Time Complexity: O(1)
    */
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    return this.stack[this.stack.length - 1][0];
    /* 
    Time Complexity: O(1)
    */
};


/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length -1][1];

     /* 
    Time Complexity: O(1)
    */
};

let minStack = new MinStack();
minStack.push(15)
minStack.push(10)
minStack.push(20)
minStack.push(2)
minStack.push(1)
minStack.push(1100)
// minStack.pop()
// console.log(minStack.top())
// console.log(minStack.getMin())


console.log(minStack)