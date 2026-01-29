

function secondLargestInArray() {

    let first_largest = Number.NEGATIVE_INFINITY
    let second_largest = Number.NEGATIVE_INFINITY
    let arr = [4, 9, 0, 2, 8, 7, 1];



    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > first_largest) {
            second_largest = first_largest
            first_largest = arr[i]
        }


        if ((second_largest < arr[i]) && (second_largest != first_largest)) {
            second_largest = arr[i]
        }

    }
    console.log(first_largest);
    console.log(second_largest);

}


secondLargestInArray()