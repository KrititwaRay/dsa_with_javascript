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


// leftRotateByOne()





function rightRotateByOne() {
    let arr = [1, 2, 3, 4, 5];
    /*
     O/P [5,1,2,3,4] 
    */
    let copy = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = copy
    console.log(arr);
}

// rightRotateByOne()




/* 
    Q2: Left and Right Rotation by K Elements

    You are given an array of integers and a number k.
    Your task is to rotate the array:

    Left Rotation by k elements

    Right Rotation by k elements

    Example

    Input:
    Array = [1, 2, 3, 4, 5]
    k = 2

    Expected Output (Answer)
    1. Left Rotation by 2

    [3, 4, 5, 1, 2]

    2. Right Rotation by 2

    [4, 5, 1, 2, 3]
*/

function leftRotateByK() {
    let arr = [1, 2, 3, 4, 5];
    let k = 5;

    k = k % arr.length

    for (let j = 0; j < k; j++) {

        let copy = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = copy;
    }

    console.log(arr);

}

// leftRotateByK()