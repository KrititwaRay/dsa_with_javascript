function bubbleSort(arr) {
    // console.log(arr.sort());
    let n = arr.length - 1
    for (let i = 0; i < n; i++) {
        let isSort = false;
        for (let j = 0; j < n - i; j++) {

            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] ^ arr[j + 1]
                arr[j + 1] = arr[j] ^ arr[j + 1]
                arr[j] = arr[j] ^ arr[j + 1]

                isSort = true
            }
        }
        if (!isSort) break
    }
    return arr
    /* 
        Time Complexity = O(n^2)
        Space Complexity = O(1)
    */
}
let result = bubbleSort([4, 9, 0, 2, 8, 7, 1]);
console.log(result);
