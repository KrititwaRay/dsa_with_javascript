let arr = [2, 7, 11, 15];

let target = 9;

function twoSum(arr, target) {

    let map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        
        let sum = target - arr[i]
        
        if(map[sum] && map[sum] != i){
            return [i, map[sum]]
        }  
    }
    /* 
    Time Complexity: O(n)
    space Complexity: O(1)
    */
}
let result = twoSum(arr, target);
console.log("result ", result)