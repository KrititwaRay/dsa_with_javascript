/* 34. Find First and Last Position of Element in Sorted Array */


/* 

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is a non-decreasing array.
-10^9 <= target <= 10^9

*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, target) {

    let s = 0;
    let e = arr.length - 1;
    let res = [-1, -1]

    while(s < e){
        let mid = s + Math.floor((e - s) / 2);

        if(arr[mid] < target){
            s = mid + 1
        }else{
            e = mid
        }
    }

    if(arr[s] === target) res[0] = s

    s = 0; e = arr.length - 1;

    while(s < e){
         let mid = s + Math.ceil((e - s) / 2);

         if(arr[mid] > target){
            e = mid - 1
         }else{
            s = mid
         }
    }

    if(arr[s] === target) res[1] = s

    return res
};