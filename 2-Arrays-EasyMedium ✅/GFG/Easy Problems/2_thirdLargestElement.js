/* Third largest element in an array  */



let arr = [2, 4, 1, 3, 5]

function thirdLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    // If length of array is less than 3, return -1

    if (arr.length < 3) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if ((arr[i] > second) && (arr[i] < first)) {
            third = second;
            second = arr[i];
        } else if ((arr[i] > third) && (arr[i] < second)) {
            third = arr[i];
        }
    }
    // If third largest does not exist
    if (third === -Infinity) return -1;
    return {
        first,
        second,
        third
    }
}

let result = thirdLargest(arr);
console.log(result)