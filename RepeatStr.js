function repeatStringNumTimes(str, num) {
    if(num <= 0) return ""

    for(const original = str; num > 1; str += original, num--);
    return str
}

function repeatStringNumTimes_2(str, num) {
    if(num <= 0) return ""
    else if(num == 1) return str
    else return str + repeatStringNumTimes_2(str, num - 1)
}
  
  console.log(repeatStringNumTimes("abc", 3));