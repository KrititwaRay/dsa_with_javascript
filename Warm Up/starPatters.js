

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