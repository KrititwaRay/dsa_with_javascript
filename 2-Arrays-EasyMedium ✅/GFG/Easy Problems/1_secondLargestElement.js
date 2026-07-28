/* Second Largest Element in an Array */

let arr = [12, 35, 1, 10, 34, 1];


function getSecondLargest(arr){

    let largest = -Infinity
    let SecondLargest = -Infinity

    for( let  i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            SecondLargest = largest;
            largest = arr[i];

        }else if((arr[i] > SecondLargest) && arr[i] != largest ){
            SecondLargest = arr[i]
        }
    }
    return {
        largest: largest,
        SecondLargest: SecondLargest
    }

}

let result = getSecondLargest(arr);

console.log(result)