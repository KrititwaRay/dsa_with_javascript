function firstPattern(n) {
    // *****
    // *****
    // *****
    // *****

    let pattern = ""
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n; j++) {
            row += "*"
        }

        pattern += row + "\n"
    }
    return pattern
}


// let result = firstPattern(5)
// console.log(result);


function secondPattern(n){
      /* 
        *
        ** 
        ***  
        **** 
    */
        let pattern = ""

        for(let i=0;i<n; i++){
            let row = ""
            for(let j = 0; j<i; j++){

                row += "*"

            }
            pattern += row + "\n"
        }
        return  pattern

}

// let result = secondPattern(5)
// console.log(result);



