/*
    reverseString: String -> String
    args:
        str(String): The string to be reversed
    return:
        (String): The string reversed
*/

function reverseString(str) {
    return str.split('')
            .reverse()
            .join('');
}

const reverseString_2 = (str) => str.split('').reverse().join('');

function reverseString_3(str) {
    let output = [];
    const original = str.split('');
    for(let i = 1; i <= original.length; i++){
        output.push(original[original.length - (1 * i)]);
    }
    return output.join('');
}

function reverseString_4(str) {
    let output = [];
    for(let i = str.length - 1; i >= 0; output.push(str[i]), i--);
    return output.join('');
}

function reverseString_5(str) {
    for(var output = "", i = str.length - 1; i >= 0; output+=(str[i]), i--);
    return output;
}
  
console.log(reverseString("hello"));
console.log(reverseString_2("hello"));
console.log(reverseString_3("hello"));
console.log(reverseString_4("hello"));
console.log(reverseString_5("hello"));