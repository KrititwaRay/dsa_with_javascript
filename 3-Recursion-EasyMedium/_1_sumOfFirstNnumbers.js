function sumOfFirstNnumbers(num){
    if(num == 0) return 0;
    let sum = 0;
    sum += num + sumOfFirstNnumbers( --num);
    return sum


    /* 
    
    Time Complexity: O(n)
    */
}


let result = sumOfFirstNnumbers(5);
console.log(result);