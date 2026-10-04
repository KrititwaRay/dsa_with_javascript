/* 69. Sqrt(x) */


/* 

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.




Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.



Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


Constraints:

0 <= x <= 2^31 - 1

*/



/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    if(x < 2) return x;

    let start = 2;
    let end = Math.floor(x/2);

    
    while(start <= end){
    
        let mid = start + Math.floor((end - start) / 2);
        
        if(mid**2 === x) {
            
            return mid
        }
        else if(x < mid**2){
            end = mid -1
        }else{
            start = mid + 1
        }


    }


    return end;
    
};



/* 

Time Complexity:  O(log n)
Space Complexity: O(1)

*/
let result = mySqrt(8);
console.log(result)