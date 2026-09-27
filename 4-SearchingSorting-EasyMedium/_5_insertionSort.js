let arr = [7, 4, 3, 5, 1, 2]


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let previous = i - 1;

        while ((arr[previous] > current) && previous >= 0) {

            arr[previous + 1] = arr[previous]

            previous--
        }
        arr[previous + 1] = current;
    }

    return arr
}

/*     
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
let result = insertionSort(arr);
console.log(result)