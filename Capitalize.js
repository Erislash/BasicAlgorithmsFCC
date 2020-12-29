function titleCase(str) {
    return str.toLowerCase()
    .split(' ')
    .map(word => word.split('')
    .map((letter, idx) => 
    (idx === 0) 
    ? letter.toUpperCase() 
    : letter)
    .join(''))
    .join(' ');
}

function titleCase_2(str) {
    return str.toLowerCase()
    .split(' ')
    .map(word =>
         word
         .replace(word[0], word[0].toUpperCase()))
    .join(' ');
}

function titleCase_3(str) {
    return str.toLowerCase()
    .replace(/(^|\s)\w/g, l => l.toUpperCase());
}
  
console.log(titleCase_2("I'm a lItTle tEa POT"));