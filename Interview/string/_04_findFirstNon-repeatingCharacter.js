
let str = "aabbcde";

function findFirstNonRepeatingCharacter(str) {

    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        if (!map.has(str.charAt(i))) {
            map.set(str.charAt(i), 1)
        } else {

            let val = map.get(str.charAt(i))
            map.set(str.charAt(i), ++val)

        }
    }

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        if (map.get(char) === 1) {
            return char
        }
    }
    return null;

}


let result = findFirstNonRepeatingCharacter(str);
console.log(result)