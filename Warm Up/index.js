

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

let result = seventhPattern(5);
console.log(result);