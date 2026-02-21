/* 283. Move Zeroes */


/* 

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]


Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:
1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1

*/


var moveZeroes = function (nums) {

    let x = 0;
    let temp;
  

    for(let i = 0; i<nums.length; i++){
        if(nums[i] != 0){
            temp = nums[i];
            nums[i] = nums[x]
            nums[x] = temp;
            x++
        }
    }

    return nums;
   


}


let arr = [1,2,3]

let result = moveZeroes(arr)
console.log(result);