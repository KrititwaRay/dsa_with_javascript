function bubbleSort(arr) {


    for (let i = 0; i < arr.length - 1; i++) {
        let swap = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                arr[j] = arr[j] ^ arr[j + 1];
                arr[j + 1] = arr[j] ^ arr[j + 1];
                arr[j] = arr[j] ^ arr[j + 1];

                swap = true;

            }
        }
        if (!swap) break;

    }
    return arr


    /*     
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    */

}

let array = [5, 2, 4, 1];
let result = bubbleSort(array);
console.log(result);
