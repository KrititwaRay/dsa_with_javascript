/* 540. Single Element in a Sorted Array */


/* 

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.



Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10
 

Constraints:

1 <= nums.length <= 10^5
0 <= nums[i] <= 10^5


*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let s = 0;
    let e = arr.length - 1;

    while(s <= e){
        let mid = s + Math.floor((e - s) / 2);

        if(arr[mid] === arr[mid - 1]){
            let leftCount = mid - 1 - s

            if(leftCount % 2 === 1){
                e = mid - 2
            }else{
                s = mid + 1
            }
        } else if(arr[mid] === arr[mid + 1]){
            let leftCount = mid - s

            if (leftCount % 2 === 1) {
                e = mid-+ 1
            } else {
                s = mid + 2
            }
        }else{
            return arr[mid]
        }

        
    }
};