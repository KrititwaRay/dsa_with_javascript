/* 658. Find K Closest Elements */


/* 

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:


|a - x| < |b - x|, or
|a - x| == |b - x| and a < b

Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,1,2,3,4,5], k = 4, x = -1
Output: [1,1,2,3]



Constraints:

1 <= k <= arr.length
1 <= arr.length <= 10^4
arr is sorted in ascending order.
-10^4 <= arr[i], x <= 10^4

*/



/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let s = 0;
    let e = arr.length - 1;


    while (s < e) {
        let mid = s + Math.floor((e - s) / 2);
        if (arr[mid + k] - x < x - arr[mid]) {
            s = mid + 1
        } else {
            e = mid;
        }
    }

    return arr.slice(s, s + k)

};