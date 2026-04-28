/* 771. Jewels and Stones */


/* 
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".


Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0


Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

*/


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

let jewels = "aA";
let stones = "aAAbbbb";

var numJewelsInStones_1 = function (jewels, stones) {
    let jewrlsSet = new Set();
    let count = 0;

    for (let i = 0; i < jewels.length; i++) {
        jewrlsSet.add(jewels.charAt(i))
    }

    for (let i = 0; i < stones.length; i++) {
        if(jewrlsSet.has(stones.charAt(i))){
            count++
        }
        
    }
    return count;

    /* 
        Time Complexity: O(1) * n  => O(n)
        Space Complexity: O(1)
    */
};


// let result = numJewelsInStones_1(jewels, stones);
// console.log(result)

var numJewelsInStones_2 = function (jewels, stones) {

    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if(jewels.charAt(j) === stones.charAt(i)){
                count++
                break;
            }
        }
    }

    return count;

    /* 
        Time Complexity: O(m * n) => O(mn)
        Space Complexity: O(1)
    */
};


let result = numJewelsInStones_2(jewels, stones);

console.log(result)