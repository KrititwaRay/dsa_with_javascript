/* 20. Valid Parentheses */

/* 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false

Constraints:
1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.

*/


/**
 * @param {string} s
 * @return {boolean}
 */

let str = "()[]{}";
var isValid_1 = function (str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        } else {
            let top = stack.pop();

            if (!top || (top === '(' && str[i] !== ')') || (top === '{' && str[i] !== '}') || (top === '[' && str[i] !== ']')) {
                return false;
            }
            
        }
    }

    return stack.length === 0;

    /* 
    
    Time Complexity: O(n)
    Space Complexity: O(n)
    
    */
};

// let result = isValid_1(str);
// console.log(result)

var isValid_2 = function (str) {
    let stack = [];

    let map = {
        '(':')',
        '{':'}',
        '[':']',
    }

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            stack.push(str[i])
        } else {
            let top = stack.pop();
            if (!top || str[i] !== map[top]) {
                return false;
            }
        }
    }
   
    return stack.length === 0;

    /* 
    
        Time Complexity: O(n)
        Space Complexity: O(n)
    
    */
};

let result = isValid_2(str);
console.log(result)