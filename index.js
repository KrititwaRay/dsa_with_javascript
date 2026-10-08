

let str = "I love JavaScript";
function reverseWords(str) {
    let result = "";
    let word = "";

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str.charAt(i);

        if (char !== " ") {
            word = char + word;
        } else {
            if (word.length > 0) {
                result += word + " ";
                word = "";
            }
        }
    }

    // Add the first word
    if (word.length > 0) {
        result += word;
    }

    return result;
}

console.log(reverseWords("I love JavaScript"));