/* 1221. Split a String in Balanced Strings */

/* 
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.


Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.


Example 2:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.


Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".


Constraints:

2 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string.

*/


/**
 * @param {string} s
 * @return {number}
 */

let str = "LLLLRRRR"

var balancedStringSplit_01 = function (s) {
    let R = 0;
    let L = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'R') {
            R++
        } else {
            L++
        }

        if (R === L) {
            count++
            R = 0;
            L = 0;
        }
    }

    return count;
};



// let result = balancedStringSplit_01(str)
// console.log(result)


function balancedStringSplit_02(s) {

    let temp = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'R') {
            temp++
        } else {
            temp--
        }

        if (temp === 0) {
            count++
        }
    }

    return count;

}


let result = balancedStringSplit_02(s);
console.log(result)