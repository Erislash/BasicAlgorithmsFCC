function frankenSplice(arr1, arr2, n) {
    return arr2.slice(0, n)
    .concat([...arr1])
    .concat(arr2.slice(n, arr2.length));
}


function frankenSplice_2(arr1, arr2, n) {
    const output = [];
    for(let i = 0; i < n; i++){
        output.push(arr2[i]);
    }
    for(let i of arr1){
        output.push(i);
    }
    for(let i = n; i < arr2.length; i++){
        output.push(arr2[i]);
    }
    return output
}

function frankenSplice_3(arr1, arr2, n) {
    let output = arr2.slice();
    for(let i of arr1){
        output.splice(n, 0, i);
        n++;
    }
    return output
}


const frankenSplice_4 = (arr1, arr2, n) => 
[...arr2.slice(0, n), ...arr1, ...arr2.slice(n,)]

  
console.log(frankenSplice_3([1, 2, 3], [4, 5], 1));