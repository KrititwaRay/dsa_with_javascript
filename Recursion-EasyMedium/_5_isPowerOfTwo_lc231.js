/* 231. Power of Two */

/* 

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2^x.

Example 1:
Input: n = 1
Output: true
Explanation: 2^0 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 2^4 = 16

Example 3:
Input: n = 3
Output: false

*/


var isPowerOfTwo = function (n) {

    if (n == 1) return true;

    if ((n < 1) || ((n % 2) != 0)) return false;


    return isPowerOfTwo(n / 2)

};


let result = isPowerOfTwo(16);
console.log(result);


