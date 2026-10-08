

let arr = [5,2,4,8,7,3,0]


function secondLargestElement(arr){

    let first_larget = Number.NEGATIVE_INFINITY
    let second_larget = Number.NEGATIVE_INFINITY


    for(let i = 0; i < arr.length; i++){
        if(arr[i] > first_larget){
            second_larget = first_larget;
            first_larget = arr[i]
        }else if(arr[i] > second_larget && arr[i] != first_larget){
            second_larget = arr[i]
        }
    }

    return {
        second_larget
    }

}

let result = secondLargestElement(arr);
console.log(result)