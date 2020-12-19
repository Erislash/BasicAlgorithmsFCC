function findLongestWordLength(str) {
    const regExp = new RegExp(/[^\w']+/, 'g');
    const words = str.split(regExp);

    const longest = words.reduce((acum, current) => {
        //Reduce Process
        // console.log(`Acum: ${acum}\nCurrent: ${current}\n\n` );
        return (acum <= current.length) ? current.length : acum
    }, words[0].length);

    return longest
}

function findLongestWordLength_2(str) {
    const regExp = new RegExp(/[^\w']+/, 'g');
    const words = str.split(regExp);

    const longest = words.reduce((acum, current) => {
        //Reduce Process
        // console.log(`Acum: ${acum}\nCurrent: ${current}\n\n` );
        return (acum.length <= current.length) ? current : acum
    }, words[0]);

    return longest.length
}

function findLongestWordLength_3(str) {
    const regExp = new RegExp(/[^\w']+/, 'g');
    const words = str.split(regExp);

    return words.reduce((acum, current) => {
        //Reduce Process
        // console.log(`Acum: ${acum}\nCurrent: ${current}\n\n` );
        return (acum <= current.length) ? current.length : acum
    }, words[0].length);
}

function findLongestWordLength_4(str) {
    const regExp = new RegExp(/[^\w']+/, 'g');
    const words = str.split(regExp);
    return Math.max(...words.map(word => word.length));
}

function findLongestWordLength_5(str) {
    str = str.split(" ");
    if(str.length <= 1) return str[0].length;

    if(str[0].length > str[1].length){
        str.splice(1, 1)
        return(findLongestWordLength_4(str.join(' ')))
    }
    else 
        return(findLongestWordLength_4(str.slice(1, str.length).join(' ')))
}

function findLongestWordLength_6(str) {
    str = str.split(" ");
    console.log(str);

    if(str.length <= 1) return str[0].length


    return (str[0].length < str[1].length)
    ? findLongestWordLength_6(str.slice(1, str.length).join(" "))
    : findLongestWordLength_6(
        (str.slice(0, 1)
        .concat(str.slice(2, str.length))
        .join(" ")
        ))
}



console.log(findLongestWordLength_6("The quick brown fox jumped over the lazy dog"));
