function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i; else "Target not found."
    }
}

let arr = [4, 9, 1, 0, 2];
let target = 0;
let result = linearSearch(arr, target)
console.log(result);