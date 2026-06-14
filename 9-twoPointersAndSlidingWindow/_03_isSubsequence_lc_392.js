/* 392. Is Subsequence */


/* 

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false



Constraints:

0 <= s.length <= 100
0 <= t.length <= 10^4
s and t consist only of lowercase English letters.


*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


let s = "abc";
let t = "ahbgdc";
var isSubsequence = function(s, t) {

    let i = j = 0;
    while( j < t.length){
        if(s[i] === t[j]){
            i++;
        }
        j++
    }

    return i === s.length;
    
    /*
    Time Complexity: O(n)
    Space Complexity: O(1)
   */
};


let result = isSubsequence(s, t);
console.log(result)