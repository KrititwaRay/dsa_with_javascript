/* Remove duplicate  from array *//* Remove Duplicate From Array */

let arr = [1, 2, 2, 3, 4, 4, 5, 3];


/* 
seen object
Sorted required? ❌ No
Time Complexity: O(n)
Space Complexity: O(n)
Best for: Unsorted arrays

*/
function removeDuplidate_1(arr) {
    let seen = {};
    let write = 0;

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] === undefined) {
            seen[arr[i]] = true
            arr[write] = arr[i]
            write++
        }


    }
    arr.length = write
    return arr
}
// let result = removeDuplidate_1(arr)
// console.log(result)




/* 
Two pointers
Sorted required? ✅ Yes
Time Complexity: O(n)
Space Complexity: O(1)
Best for: Sorted arrays

*/
function removeDuplicate_2(arr) {

    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[index]) {
            index++

            arr[index] = arr[i]
        }
    }

    arr.length = index + 1
    return arr;
}
let result = removeDuplicate_2(arr);
console.log(result)