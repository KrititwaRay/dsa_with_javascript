/* 7. Reverse Integer */

/* 

    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    Example 1:
    Input: x = 123
    Output: 321

    Example 2:
    Input: x = -123
    Output: -321

    Example 3: 
    Input: x = 120
    Output: 21

*/

function reverseInteger(n) {

    let copy = n;
    let reverse = 0;
    n = Math.abs(n)

    while (n > 0) {
        let lastDigit = n % 10;
        reverse = (10 * reverse) + lastDigit
        // (10 * 0) + 0 = 0
        //  (10 * 0 ) + 6 = 6
        // (10 * 6) + 5 = 65 
        n = Math.floor(n / 10)

    }

    return copy < 0 ? -reverse : reverse;

}



let number = -560;
let result = reverseInteger(number);
console.log(result);