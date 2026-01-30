

/* 
    CORNER CASES:

    - Array is empty
    - Array has negative number
    - Arrat has duplicates

*/

function secondLargestInArray(arr) {

    if (arr.length == 0) return "Empty Array";

    if (arr.length <= 1) return arr[0];

    let first_largest = Number.NEGATIVE_INFINITY
    let second_largest = -Infinity

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > first_largest) {
            second_largest = first_largest
            first_largest = arr[i]
        } else if ((arr[i] > second_largest) && arr[i] != first_largest) {
            second_largest = arr[i]
        }
    }

    return {
        "first_largest": first_largest,
        "second_largest": second_largest,
    };

}
let arr = [4, 9, 0, 2, 8, 7, 1];//[10,20,20]

const result = secondLargestInArray(arr);

console.log("result: ", result);