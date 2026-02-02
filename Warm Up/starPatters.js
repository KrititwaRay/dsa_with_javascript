

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


function forthPattern(n) {
    /* 
        1
        22
        333
        4444
        55555  
    */

    let pattern = ""
    for (let i = 0; i <= n; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            row += i+1
        }
        pattern += row + '\n'
    }

    return pattern
}

/* let result = forthPattern(5)
console.log(result); */


function fifthPattern(n) {
    /*   12345
         1234
         123
         12
         1
     */

    let pattern = ""
    for (let i = 0; i <= n; i++) {
        let row = ""
        for (let j = 0; j < n - i; j++) {
            row += j + 1;
        }
        pattern += row + '\n'
    }
    return pattern;
}

/* let result = fifthPattern(5)
console.log(result); */


function sixthPattern(n){
    /*
        *
       **
      ***
     ****
    ***** 
    */
   
    let pattern = "";
    for (let i = 0; i < n; i++) {
        let row = "";
        // spaces
        for (let j = 0; j < n - (i + 1); j++) {
            row += " ";
        }
        // stars
        for (let k = 0; k < i + 1; k++) {
            row += "*";
        }
        pattern += row + "\n";
    }
    return pattern;
}
/* let result = sixthPattern(5)
console.log(result); */




function seventhPattern(n) {
    /* 
        1
        10
        101
        1010
        10101
        101010

    */

    let pattern = "";
    for (let i = 0; i < n; i++) {
        let row = ""
        let tempSwitch = 1;
        for (let j = 0; j < i + 1; j++) {
            row += tempSwitch
            if(tempSwitch == 1){
                tempSwitch = 0
            }else{
                tempSwitch = 1
            }
        }
        pattern += row + '\n';
    }
    return pattern;
}

/* let result = seventhPattern(5);
console.log(result); */




function eightPattern(n) {
    /*  1
        01
        010
        1010
        10101
        010101 
    */
    let pattern = "";
    let toggle = 1;
    for (let i = 0; i < n; i++) {
        let row = "";
        
        for (let j = 0; j <= i; j++) {
            row += toggle;
            toggle = toggle == 1 ? 0 : 1
        }

        pattern += row + '\n'
    }
    return pattern;
}

/* let result = eightPattern(5)
console.log(result); */