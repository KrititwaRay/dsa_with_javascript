let arr = [2, 44, 1, 55, 8, 2, 16, 13]

function mergeSort(arr) {

    if (arr.length <= 1) return arr;
    let mid = Math.floor((arr.length / 2))

    let left = mergeSort(arr.slice(0, mid))

    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let arr = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr.push(left[i])
            i++
        } else {
            arr.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        arr.push(left[i])
        i++

    }

    while (j < right.length) {
        arr.push(right[j])
        j++
    }

    return arr
}



/* 
    Time Complexity: O(n log n)
    Spcae Complexity: O(n)
*/
let result = mergeSort(arr);
console.log(result)