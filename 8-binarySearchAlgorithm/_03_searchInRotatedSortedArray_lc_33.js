/* 33. Search in Rotated Sorted Array */


/* 

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.




Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1



Constraints:

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-10^4 <= target <= 10^4
*/






/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


let arr = [8,9,10,1,2,3,4,5,6,7]
let target = 9

var search = function(arr, target) {

    let s = 0;
    let e = arr.length - 1;

    while(s <= e){
        let mid = s + Math.floor((e - s) / 2);

        if(arr[mid] === target) return mid;

        if(arr[s] <= arr[mid]){
            // left sorted
            if(target < arr[mid] && target >= arr[s]){
                e = mid - 1
            }else{
                s = mid + 1;
            }

        }
        else{
            //right sort
            if(target > arr[mid] && target <= arr[e]){
                s = mid + 1
            }else{
                e = mid - 1
            }
        }
    }

    return -1;
    
};


/* 
Time Complexity: O(log n)
Space Complexity: O(1)

*/


let result = search(arr, target)
console.log(result)