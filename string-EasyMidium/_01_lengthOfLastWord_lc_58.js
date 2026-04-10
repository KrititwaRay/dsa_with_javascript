/* 58. Length of Last Word */


/*
 Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only. 


Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.


Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.


Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:

1 <= s.length <= 10^4
s consists of only English letters and spaces ' '.
There will be at least one word in s.


*/


/**
 * @param {string} s
 * @return {number}
 */

/* Two  Loops */
var lengthOfLastWord_1 = function(s) {

   let n = s.length - 1;

    while (n >= 0) {
        if (s[n] == " ") {
            --n
        } else {
            break
        }
    }
    
    let count = 0;

    while(n >= 0){
        if(s[n] != " "){
            --n
            ++count
        }else{
            break
        }
    }

    return count


    /* 
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    */
};



// let str = "hello world  "
// let result = lengthOfLastWord_1(str)
// console.log(result)




/* One  Loops */
var lengthOfLastWord_2 = function (s) {

    let n = s.length - 1;
    let count = 0;

    while (n >= 0) {

        if (s.charAt(n) !== " ") {
            ++count
        }
        else if (count > 0) {
            break
        }
        --n
    }
    return count


    /* 
    Time Complexity: O(n)
    Spcae Complexity: O(1)
    */
};



// let str = "hello world  "
// let result = lengthOfLastWord_2(str)
// console.log(result)