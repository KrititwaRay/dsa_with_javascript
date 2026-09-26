let arr = [5, 0, 1, 2, 7, 9, 3, 4]

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }

        if (min !== i) {
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr;
}



/*     
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
let result = selectionSort(arr);

console.log(result)