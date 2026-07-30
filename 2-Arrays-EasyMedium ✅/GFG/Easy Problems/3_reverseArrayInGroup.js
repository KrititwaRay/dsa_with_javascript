let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let k = 3

//OP: [3, 2, 1, 6, 5, 4, 8, 7]

function reverseInGroups(arr, k) {


    for (let i = 0; i < arr.length; i = i + k) {

        let left = i;

        let right = Math.min(i + k - 1, arr.length - 1);

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--

        }

    }
    return arr
}

let result = reverseInGroups(arr, k);
console.log(result)