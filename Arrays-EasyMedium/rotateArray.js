/* 
 Q1: Left Rotation of an Array by 1 Position

    You are given an array of integers.
    Your task is to perform one left rotation on the array.

    In a left rotation, each element of the array shifts one position to the left, and the first element moves to the end of the array.

    Example

    Input:
    [1, 2, 3, 4, 5]

    Output after 1 left rotation:
    [2, 3, 4, 5, 1]

*/


function leftRotateByOne() {
    let arr = [1, 2, 3, 4, 5];  // [2, 3, 4, 5, 1]
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    console.log(arr);
}


leftRotateByOne()