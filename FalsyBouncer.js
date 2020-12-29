function bouncer(arr) {
    let output = [];
    arr.forEach((e) => {
      if(Boolean(e) !== false) output.push(e)
    });
    return output;
}

//https://www.michaeluloth.com/filter-boolean
function bouncer_2(arr) {
    return arr.filter(Boolean)
}
  
console.log(bouncer_2([7, "ate", "", false, 9]));