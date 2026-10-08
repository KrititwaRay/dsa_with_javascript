let arr = [1, 2, 2, 3, 4, 4, 5, 3];


function findTheLargestAndSmallestElement(arr){

    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
         if(arr[i] > max){
            max = arr[i]
        }
    }


    return {
        max: max,
        min: min
    }
   
}


let result = findTheLargestAndSmallestElement(arr);
console.log(result)