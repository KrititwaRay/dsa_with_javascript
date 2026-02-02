

function tenthPattern(n){


        //     *
        //    ***
        //   *****
        //  *******
        // *********


    let pattern = ""


    for (let i = 0; i < n; i++) {

        let row = ""
        for (let j = 0; j < n - i - 1; j++) {
            row += " "
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row += "*";
        }

        pattern += row + "\n"
    }

    return pattern

}

let result = tenthPattern(5)
console.log(result);