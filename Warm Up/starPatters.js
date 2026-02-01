

/* START PATTERN */

function firstPattern(n) {
    let pattern = ""
    /* 
    
     * * * *
     * * * *
     * * * *
     * * * *
    
    */
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n; j++) {
            row += " *";
        }

        pattern += row + "\n"
    }
    return pattern
}


/* let pattern = firstPattern(4)
console.log(pattern); */


function secondPattern(n) {
    let pattern = ""
    /* 
        *
        ** 
        ***  
        **** 
    */

    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {

            row += "*"
        }
        pattern += row + '\n'

    }
    return pattern
}

/* let result = secondPattern(10);
console.log(result); */


function thirdPattern(n) {

    /* 
        1    
        1 2   
        1 2  3
        1 2  3 4
        1 2  3 4 5
    */

    let pattern = ""

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {

            row += j + 1;

        }
        pattern += row + "\n"

    }
    return pattern
}

/* let result = thirdPattern(5);
console.log(result); */